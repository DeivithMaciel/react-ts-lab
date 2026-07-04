import { configureStore } from "@reduxjs/toolkit";

import Usuariosreducer from '../features/Usuarios/usuariosSlice'

export const store = configureStore(({
    reducer: {
        usuarios: Usuariosreducer
    }
}))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch