import  { formatador } from "../../utils/formatCurrency"
import { useCarrinho, useProdutos, useUsuarios } from "../../utils/hooks"

import { List } from "./styles"

export const StatsGrid = () => {
    const { totalCart, valorTotal } = useCarrinho()
    const produtos = useProdutos()
    const usuarios = useUsuarios()

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