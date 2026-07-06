import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Produto } from '../../types/Produto'
import { API_PRODUTOS } from "../../services/api";

export const initialState:  Produto[] = []

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
    reducers: {}
})