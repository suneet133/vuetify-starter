import axios from 'axios'

const baseUrl = process.env.VUE_APP_API_URL

const apiClient = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
        Accept: 'application/json'
    }
})

/*request interceptor*/

// Add a request interceptor
apiClient.interceptors.request.use(function(config) {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user.token) {
        config.headers['Authorization'] = 'Bearer ' + user.token
    }
    return config
}, function(error) {
    // Do something with request error
    return Promise.reject(error)
})

apiClient.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
        localStorage.removeItem('user')
        location.reload()
    }
    return Promise.reject(error)
})


export default apiClient





