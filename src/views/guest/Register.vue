<template>
 <v-app>
  <v-main>
<v-container fluid fill-height>
  <v-layout align-center justify-center>
  <v-flex xs12 sm8 md6>
  <v-card class="elevation-12" outlined>
    <v-toolbar dark color="primary">
      <v-toolbar-title>Register</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form ref="registerForm" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" sm="2" md="2">
            <v-select outlined
              v-model="salutation"
              :items="items"
              :rules="[(v) => !!v || 'Salutation is required']"
              label="Select"
              required
            ></v-select>
          </v-col>
          <v-col cols="12" sm="5" md="5">
            <v-text-field
                outlined
              v-model="firstName"
              :rules="[rules.required]"
              label="First Name"
              maxlength="20"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="5" md="5">
            <v-text-field
                outlined
              v-model="lastName"
              :rules="[rules.required]"
              label="Last Name"
              maxlength="20"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                outlined
              v-model="companyName"
              label="Company Name"
              maxlength="20"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select outlined
              v-model="legalForm"
              :items="formItems"
              label="Select Legal Form"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
                outlined
              v-model="street"
              label="Street"
              maxlength="20"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                outlined
              v-model="address"
              label="Address Line"
              maxlength="27"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                outlined
              v-model="postalCode"
              label="ZIP / Postal Code"
              maxlength="6"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                outlined
              v-model="city"
              label="City"
              maxlength="20"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                outlined
              v-model="country"
              label="Country"
              maxlength="20"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                outlined
              v-model="username"
              name="username"
              label="Email Address"
              type="text"
              placeholder="username"
              required
              :rules="loginEmailRules"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                outlined
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                outlined
              block
              v-model="verify"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, passwordMatch]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Confirm Password"
              counter
                autocomplete='new-password'
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                outlined
              v-model="phoneno"
              label="Phone Number"
              maxlength="10"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                outlined
              v-model="iban"
              label="IBAN"
              maxlength="21"
              required
            ></v-text-field>
          </v-col>
            <v-col cols="12">
          <v-checkbox
            v-model="agreeCheckbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="I agree with terms and conditions"
            required
          ></v-checkbox>
            </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="3" xsm="12">
            <v-btn
              block
              :disabled="!valid"
              color="primary"
              @click="validate"
              >Create an Account</v-btn
            >
          </v-col>
            <v-col cols="12" sm="6" md="6">
             <div class="mt-2 grey--text" style="cursor: pointer">
               <router-link to='/login' class='text--secondary'>
                   Already have an account? Login
               </router-link>
              </div>
            </v-col>


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

<script>
export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: "",
      salutation: null,
      items: ["Mr", "Ms", "Mrs"],
      formItems: ["item1", "item2", "item3"],
      companyName:"",
      legalForm: null,
      street:"",
      address:"",
      phoneno:"",
      postalCode:"",
      city:"",
      country:"",
      iban:"",
      valid:false,
      verify: "",
      loginPassword: "",
      loginEmail: "",
      loginEmailRules: [
        (v) => !!v || "Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      emailRules: [
        (v) => !!v || "Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

      show1: false,
      agreeCheckbox: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => (v && v.length >= 8) || "Min 8 characters",
      },
    };
  },
  methods: {
    register() {
      if (this.password == this.confirmPassword) {
        this.isRegister = false;
        this.errorMessage = "";
        this.$refs.form.reset();
      } else {
        this.errorMessage = "password did not match";
      }
    },
    handleClick() {
    this.$router.replace({ path: '/' })
    }
  },
  computed: {

  },
};
</script>
