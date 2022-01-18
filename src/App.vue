<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view/>
    </v-main>
      <Loader />
      <Snackbar />
  </v-app>
</template>

<script>
import NavBar from "./components/layouts/NavBar.vue";
import Loader from './components/helpers/Loader'
import Snackbar from './components/helpers/Snackbar'

export default {
    name: "App",
    created() {
        const userString = localStorage.getItem('user')
        if (userString) {
            let userData = JSON.parse(userString)
            this.$store.commit('SET_USER_DATA', userData)
        }

    },
    components: { Snackbar, Loader, NavBar },
    beforeMount() {
        const darkMode = localStorage.getItem('darkMode')
        console.log(darkMode)
        this.$vuetify.theme.dark = darkMode == 'true';
    }
};
</script>
