import { configureStore } from "@reduxjs/toolkit";

import Usuariosreducer from '../features/Usuarios/usuariosSlice'
import Produtosreducer from '../features/Produtos/produtos.slice'

export const store = configureStore(({
    reducer: {
        usuarios: Usuariosreducer,
        produtos: Produtosreducer
    }
}))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch