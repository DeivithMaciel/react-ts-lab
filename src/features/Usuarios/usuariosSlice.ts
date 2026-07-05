import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


import { API_URL } from '../../services/api'
import type { Usuario } from '../../types/Usuario'

export const fetchUsuarios = createAsyncThunk(
    "usuarios/fetchUsuarios",
    async () => {
        const res = await fetch(API_URL)
        const usuarios: Usuario[] = await res.json()
        return usuarios
    })

export const addUserAPI = createAsyncThunk(
    'addUser/fetchAdd',
    async (nome:string) => {

        const newUser = {
            id: Date.now(),
            nome: nome,
            ativo: true
        }

        await fetch(API_URL, {
            method: 'POST', //post: criar algo
            headers: {
                'Content-type': 'application/json' //falando pra api, to mandando um json
            },
            body: JSON.stringify(newUser)
        })
        return newUser
    }
)

export const removeUserAPI = createAsyncThunk(
    'removeUser/fetchRemove',
    async (id:number) => {
        
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        })
        return id
    }
)

export const editUserAPI = createAsyncThunk(
    'editUser/fetchEdit',
    async ({id, novoNome}: {
    id: number,
    novoNome: string
    }) => {

        const usuarioAtual = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({nome: novoNome})
        })
        const usuarioAtualizado = await usuarioAtual.json() 
        return usuarioAtualizado
    }
)

export const toggleActiveAPI = createAsyncThunk(
    'toggleUser/fetchToggle',
    async ({id, ativo}: {
        id: number,
        ativo: boolean
    }) => {

        const usuarioAtual = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({ativo: !ativo})
        })
        const usuarioAtualizado = await usuarioAtual.json()
        return usuarioAtualizado
    }
)

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
        builder.addCase(addUserAPI.fulfilled, (state, action) => {
            state.push(action.payload)
        })
        builder.addCase(removeUserAPI.fulfilled, (state, action) => {
            return state.filter((user) => user.id !== action.payload)
        })
        builder.addCase(editUserAPI.fulfilled, (state, action) => {
            return state.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload
                }
                return user
            })
        })
        builder.addCase(toggleActiveAPI.fulfilled, (state, action) => {
            return state.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload
                }
                return user
            })
        })
    },
    reducers: {
    }
})

export default usuariosSlice.reducer