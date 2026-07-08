

import { useSelector } from "react-redux"
import CardProdutos from "../../components/CardProdutos"
import { List } from "./styles"
import type { RootState } from "../../store/store"

const Produtos = () => {

    const produtos = useSelector((state: RootState) => state.produtos)

    return (
        <List>
            {produtos.map((product) => (
                <CardProdutos key={product.id} produto={product} />
            ))}
        </List>
    )

}

export default Produtos