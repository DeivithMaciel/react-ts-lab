import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"

import { ItemList, List } from "./styles"
import { addCart, minusOne } from "../../features/carrinho/carrinhoSlice"

const Carrinho = () => {
    const carrinho = useSelector((state: RootState) => state.carrinho)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <List>
            {carrinho.map((item) => (
                <ItemList key={item.id}>
                    <img src={item.imagem} alt={item.nome} />
                    <h3>{item.nome}</h3>
                    <div>
                        <button onClick={(() => dispatch(minusOne(item)))}>-</button>
                        <span>Un: {item.quantidade}</span>
                        <button onClick={(() => dispatch(addCart(item)))}>+</button>
                    </div>
                    <p>{item.preco}</p>
                </ItemList>
            ))}
        </List>
    )
}

export default Carrinho