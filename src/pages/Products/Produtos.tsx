import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import type { AppDispatch, RootState } from "../../store/store"
import { fetchProdutos } from "../../features/Produtos/produtos.slice"

import CardProdutos from "../../components/CardProdutos"

import { List } from "./styles"

const Produtos = () => {
    const produtos = useSelector((state: RootState) => state.produtos)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProdutos())
    }, [dispatch])

    return (
        <List>
            {produtos.map((product) => (
                <CardProdutos key={product.id} produto={product} />
            ))}
        </List>
    )

}

export default Produtos