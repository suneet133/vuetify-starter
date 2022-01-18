<template>
   <v-app>
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12" outlined>
                     <v-toolbar color="primary" outlined>
                        <v-toolbar-title>Login</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                       <v-form ref="loginForm" v-model="valid" lazy-validation @submit.prevent='login'>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field  v-model="username" name="username" label="Username" type="text" placeholder="username" outlined
                                              required :rules="loginEmailRules" autocomplete="off"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="password" :append-icon="show1?'mdi-eye' : 'mdi-eye-off'" autocomplete='new-password' placeholder='password'
                                                          :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1" outlined></v-text-field>
                                        </v-col>


                                         <div class="red--text"> {{errorMessage}}</div>
                                            <v-btn class="ml-3" type='submit' :disabled="!valid" color="primary" @click="validate"> Login </v-btn>
                                          <div class="grey--text mt-2 ml-3">
                                            <router-link to='/register' class='text--secondary'>
                                                Register
                                            </router-link>
                                          </div>
                                    </v-row>
                                </v-form>
                     </v-card-text>
                  </v-card>

               </v-flex>

            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>import { loginUser } from "../../services/AuthService";


export default {
  name: "Login",
  components:{
  },
  data() {
    return {
      username: "",
      password: "",
        valid: true,
      errorMessage: "",
      loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
     show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 4) || "Min 4 characters"
    }

    };
  },
  mounted() {
  },

  methods: {

      validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
       this.login();
      }
    },

    goToRegister(){
      this.$router.push('/register')
    },
    login() {
          let credentials = {
             username : this.username,
             password : this.password
          }

         this.$store.dispatch('loaderOn')
            loginUser(credentials)
                .then(response => {
                    console.log('response', response.data)
                    this.$store.commit('SET_USER_DATA', response.data)
                    this.$store.dispatch('positiveNotification', 'Login successful!')
                    this.$store.dispatch('loaderOff')
                   this.$router.push('/dashboard')
                })
                .catch(error => {
                  //  errors.value = error.response.data.errors
                    console.log(error.response.data.error)
                   this.$store.dispatch('loaderOff')
                    this.$store.dispatch('negativeNotification', error.response.data.error)
                })

    }
  },
};
</script>
