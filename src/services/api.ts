import axios from "axios"

export const API_URL = "http://localhost:3001/usuarios"
export const API_PRODUTOS = "http://localhost:3001/produtos"

export const api = axios.create({
    baseURL: "http://localhost:3001",    
})
api.interceptors.request.use((config) => {
    return config
})