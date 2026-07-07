import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store/store"

import type { Produto } from "../../types/Produto"
import { Item } from "./styles"
import { addCart } from "../../features/carrinho/carrinhoSlice"

type ProductsProps = {
    produto: Produto
}

export const CardProdutos = ({produto}: ProductsProps) => {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <Item>
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <span>R${produto.preco}</span>
            <button onClick={(() => dispatch(addCart(produto)))}>Adicionar ao carrinho</button>
        </Item>
    )
}

export default CardProdutos