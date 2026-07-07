import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"

import { ItemList, List } from "./styles"
import { addCart, minusOne } from "../../features/carrinho/carrinhoSlice"

const Carrinho = () => {
    const carrinho = useSelector((state: RootState) => state.carrinho)
    const dispatch = useDispatch<AppDispatch>()

    const valorTotal = carrinho.reduce((acum, item) => {
        return acum + (item.preco * item.quantidade)
    }, 0)

    return (
            <div>
                {carrinho.length <= 0 ? (
                    <h2>Carrinho vazio. Adicione algum produto</h2>
            ) : (
                <h2>Valor Total: R${valorTotal}</h2>
            )}
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
            </div>
    )
}

export default Carrinho