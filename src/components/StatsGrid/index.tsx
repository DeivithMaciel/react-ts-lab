import { useSelector } from "react-redux"

import type { RootState } from "../../store/store"
import  { formatador } from "../../utils/formatCurrency"

import { List } from "./styles"

export const StatsGrid = () => {
    const carrinho = useSelector((state: RootState) => state.carrinho)
    const produtos = useSelector((state: RootState) => state.produtos)
    const usuarios = useSelector((state: RootState) => state.usuarios)

    const valorTotal = carrinho.reduce((acum, item) => {
        return acum + (item.preco * item.quantidade)
    }, 0)

    const totalCart = carrinho.reduce((acum, item) => {
        return acum + item.quantidade
    }, 0)

    return (
            <List>
                <li>
                    <h3>Produtos</h3>
                    <p>{produtos.length}</p>
                </li>
                <li>
                    <h3>Usuarios</h3>
                    <p>{usuarios.length}</p>
                </li>
                <li>
                    <h3>Carrinho</h3>
                    <p>{totalCart}</p>
                </li>
                <li>
                    <h3>Valor total</h3>
                    <p>{formatador.format(valorTotal)}</p>
                </li>
            </List>
    )
}

export default StatsGrid