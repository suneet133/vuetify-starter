import apiClient from "./config/config"

export const getUserInfo = () => {
    return apiClient.get('/user/info')
}

/* export const logout = () => {
    return apiClient.post('/user/logout')
} */
