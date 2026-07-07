import { configureStore } from "@reduxjs/toolkit";

import Usuariosreducer from '../features/Usuarios/usuariosSlice'
import Produtosreducer from '../features/Produtos/produtos.slice'
import Carrinhoreducer from '../features/carrinho/carrinhoSlice'

export const store = configureStore(({
    reducer: {
        usuarios: Usuariosreducer,
        produtos: Produtosreducer,
        carrinho: Carrinhoreducer
    }
}))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch