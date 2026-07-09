import { useState } from "react"

import CardProdutos from "../../components/CardProdutos"
import { useProdutos } from "../../utils/hooks"

import { List } from "./styles"
import Modal from "../../components/Modal"

const Produtos = () => {
    const [modalAberta, setModalAberta] = useState(false)

    const produtos = useProdutos()

    return (
        <div>
            <List>
            {produtos.map((product) => (
                <CardProdutos key={product.id} produto={product} />
            ))}
        </List>
            <button onClick={(() => setModalAberta(true))}>Novo produto</button>
            <Modal 
            aberto={modalAberta} 
            onClose={(() => setModalAberta(false))}
            title="Novo produto">
                <p>Primeiro teste modal</p>
            </Modal>
        </div>
    )
}

export default Produtos