import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"

import type { Usuario } from '../types/Usuario'

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
        }
    }
})

export default usuariosSlice.reducer