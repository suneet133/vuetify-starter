import axios from 'axios'

const baseUrl = process.env.VUE_APP_API_URL
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
const apiClient = axios.create({
    baseURL: baseUrl
})

export const registerUser = (data) => {
    return apiClient.post('register', data)
}
export const loginUser = (data) => {
    return apiClient.post('/oauth/token', data)
}
