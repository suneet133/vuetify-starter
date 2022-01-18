import apiClient from '../services/config/config'

import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        flashMessage: '',
        user: null,
        isLoading: false
    },
    mutations: {
        POSITIVE_NOTIFICATION(state, message) {
            state.flashMessage = message
        },
        NEGATIVE_NOTIFICATION(state, message) {
            state.flashMessage = message
        },
        LOADER_OPEN(state) {
            state.isLoading = true
        },
        LOADER_CLOSE(state) {
            state.isLoading = false
        },
        SET_USER_DATA(state, userData) {
            localStorage.setItem('user', JSON.stringify(userData))
            state.user = userData
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${userData.access_token}`
        },
        CLEAR_USER_DATA() {
            localStorage.removeItem('user')
            location.reload()
        }
    },
    actions: {
        positiveNotification({ commit }, message) {
            console.log(message)
            commit('POSITIVE_NOTIFICATION', message)
        },
        negativeNotification({ commit }, message) {
            console.log(message)
            commit('NEGATIVE_NOTIFICATION', message)
        },
        logout({ commit }) {
            /*logout().then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error.response.data)
            }).finally(() => {
                commit('CLEAR_USER_DATA')
            })*/
            commit('CLEAR_USER_DATA')
        },
        loaderOn({ commit }) {
            commit('LOADER_OPEN')
        },
        loaderOff({ commit }) {
            commit('LOADER_CLOSE')
        }
    },
    getters: {
        loggedIn(state) {
            return !!state.user
        }
    }
})
