import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"

import type { Usuario } from '../../types/Usuario'

const initialState: Usuario[] = [
    {
        id: 1,
        nome: "Ana",
        ativo: true
    },
    {
        id: 2,
        nome: "João",
        ativo: false
    }
]

const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState,
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

export default usuariosSlice.reducer