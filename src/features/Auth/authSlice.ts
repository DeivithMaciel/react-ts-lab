import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "../../types/Auth";

const salvo = localStorage.getItem('auth')

export const initialState: AuthState = salvo
? JSON.parse(salvo)
: {
    isAuthenticated: false,
    user: null
} 

export const AuthSlice = createSlice({
    name: 'autenticacao',
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.isAuthenticated = true
            state.user = action.payload
        },
        logout(state) {
            state.isAuthenticated = false
            state.user = null
        }
    }
})

export const { login, logout } = AuthSlice.actions

export default AuthSlice.reducer;