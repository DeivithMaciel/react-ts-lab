import { useDispatch, useSelector } from "react-redux";
import { useMemo } from 'react'

import type { AppDispatch, RootState } from "../store/store";

import { getProdutosCriados } from "../utils/storage";

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAuth = ()  =>  useSelector((state: RootState) => state.auth)
export const useUsuarios = ()  => useSelector((state: RootState) => state.usuarios)
export const useProdutos = ()  => useSelector((state: RootState) => state.produtos)

export const useCarrinho = ()  => {
    const carrinho = useSelector((state: RootState) => state.carrinho)
    const valorTotal = useMemo(() => {
            return carrinho.reduce((acum, item) => {
        return acum + (item.preco * item.quantidade)
    }, 0)
    }, [carrinho])
    const totalCart = useMemo(() => {
            return carrinho.reduce((acum, item) => {
        return acum + item.quantidade
    }, 0)
    }, [carrinho])
    return {
        carrinho,
        valorTotal,
        totalCart
    }
}

export const useProdutosCompletos = () => {
    const produtosApi = useProdutos()
    const produtosCriados = getProdutosCriados()

    return [
        ...produtosApi,
        ...produtosCriados
    ]
}