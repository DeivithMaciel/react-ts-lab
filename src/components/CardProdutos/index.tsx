import type { Produto } from "../../types/Produto"
import { Item } from "./styles"

type ProductsProps = {
    produto: Produto
}

export const CardProdutos = ({produto}: ProductsProps) => {
    return (
        <Item>
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <span>R${produto.preco}</span>
            <button>Adicionar ao carrinho</button>
        </Item>
    )
}

export default CardProdutos