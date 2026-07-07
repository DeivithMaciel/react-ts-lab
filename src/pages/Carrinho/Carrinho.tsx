import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"

import { ItemList, List } from "./styles"

const Carrinho = () => {
    const carrinho = useSelector((state: RootState) => state.carrinho)

    return (
        <List>
            {carrinho.map((item) => (
                <ItemList key={item.id}>
                    <img src={item.imagem} alt={item.nome} />
                    <h3>{item.nome}</h3>
                    <span>Un: {item.quantidade}</span>
                    <p>{item.preco}</p>
                </ItemList>
            ))}
        </List>
    )
}

export default Carrinho