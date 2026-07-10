import { memo } from "react"
import { useDispatch } from "react-redux"

import type { AppDispatch } from "../../store/store"
import { addCart } from "../../features/carrinho/carrinhoSlice"


import type { Produto } from "../../types/Produto"
import { formatador } from "../../utils/formatCurrency"

import { Item } from "./styles"

type ProductsProps = {
    produto: Produto
}
export const CardProdutos = ({produto}: ProductsProps) => {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <Item>
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <span>{formatador.format(produto.preco)}</span>
            <button onClick={(() => dispatch(addCart(produto)))}>Adicionar ao carrinho</button>
        </Item>
    )
}

export default memo(CardProdutos)