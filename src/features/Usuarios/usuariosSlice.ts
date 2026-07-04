import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"


import type { Usuario } from '../../types/Usuario'

const URL = 'http://localhost:3001/usuarios'
export const fetchUsuarios = createAsyncThunk(
    "usuarios/fetchUsuarios",
    async () => {
        const res = await fetch(URL)
        const usuarios: Usuario[] = await res.json()
        return usuarios
    })

const initialState: Usuario[] = []

const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(
            fetchUsuarios.fulfilled,
            (state, action) => {
                return action.payload
            }
        )
    },
    reducers: {
        addUser(state, action: PayloadAction<string>) {
            if (!action.payload.trim()) return
            const existingUser = state.find((user) => user.nome.toLowerCase() === action.payload.toLowerCase())
            if (!existingUser) {
                state.push({
                    id: Date.now(),
                    nome: action.payload,
                    ativo: true
                })
            }
        },
        editUser(state, action: PayloadAction<{id:number, novoNome:string}>) {
            return state.map((user) => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        nome: action.payload.novoNome
                    }
                }
                return user
            })
        },
        removeUser(state, action: PayloadAction<number>) {
            return state.filter((user) => user.id !== action.payload)
        },
        toggleActive(state, action: PayloadAction<number>) {
            return state.map((user) => {
                if (user.id === action.payload) {
                    return {
                        ...user,
                        ativo: !user.ativo
                    }
                }
                return user
            })
        }
    }
})

export const {
    addUser,
    editUser,
    removeUser,
    toggleActive
} = usuariosSlice.actions

export default usuariosSlice.reducer