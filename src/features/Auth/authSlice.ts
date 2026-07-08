import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "../../types/Auth";

export const initialState: AuthState = {
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
        }
    }
})

export default AuthSlice.reducer;