import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Produto } from '../../types/Produto'
import { API_PRODUTOS } from "../../services/api";

const salvo = localStorage.getItem('produtos')

export const initialState:  Produto[] = salvo
? JSON.parse(salvo)
: []

export const fetchProdutos = createAsyncThunk(
    'getProducts/fetchProducts',
    async () => {
        const res = await fetch(API_PRODUTOS)
        const data: Produto[] = await res.json()
        return data
    }
)

export const produtosSlice = createSlice({
    name: 'produtos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProdutos.fulfilled, (state, action) => {
            return action.payload
        })
    },
    reducers: {
        addProduct(state, action: PayloadAction<Produto>) {
            const newProduct = {
                id: Date.now(),
                nome: action.payload.nome,
                preco: action.payload.preco,
                imagem: action.payload.imagem
            }
            state.push(newProduct)
        }
    }
})

export const { addProduct } = produtosSlice.actions

export default produtosSlice.reducer