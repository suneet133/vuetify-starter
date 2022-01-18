<template>
    <div>
        <v-app-bar
            app
            color='primary'
            dark
        >
<!--            <div class='d-flex align-center'>
                <v-img
                    alt='Vuetify Logo'
                    class='shrink mr-2'
                    contain
                    src='https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png'
                    transition='scale-transition'
                    width='40'
                />

                <v-img
                    alt='Vuetify Name'
                    class='shrink mt-1 hidden-sm-and-down'
                    contain
                    min-width='100'
                    src='https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png'
                    width='100'
                />
            </div>-->
            <v-toolbar-title>
                <v-btn text href='/'>
                    <span class='mr-2'>QR-PROJECT</span>
                </v-btn>
            </v-toolbar-title>

            <v-progress-linear
                :active='isLoading'
                :indeterminate='isLoading'
                absolute
                bottom
                color='secondary'
            ></v-progress-linear>
            <v-spacer></v-spacer>
            <div class='login-register' v-if='!loggedIn'>
                <router-link to='/login'>
                    <v-btn text>
                        <span class='mr-2'>Login</span>
                    </v-btn>
                </router-link>
                <router-link to='/register'>
                    <v-btn text>
                        <span class='mr-2'>Register</span>
                    </v-btn>
                </router-link>
            </div>
            <div class='logout' v-if='loggedIn'>
                <v-btn text @click='logout'>
                    <span class='mr-2'>Logout</span>
                </v-btn>
            </div>
            <div class='d-flex align-center'>
                <v-container
                    class="mt-5"
                    fluid
                >
                    <v-switch
                        v-model="$vuetify.theme.dark"
                        label="Dark"
                        color='secondary'
                        @change='themeChange'
                    ></v-switch>
                </v-container>
            </div>

        </v-app-bar>
    </div>
</template>

<script>
import { authComputed } from '../../store/helper'

export default {
    name: 'NavBar',
    computed: {
        ...authComputed,
        isLoading() {
            return this.$store.state.isLoading
        }
    },
    methods: {
        themeChange() {
            localStorage.setItem('darkMode', this.$vuetify.theme.dark.toString())
        },
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>

<style>

</style>
