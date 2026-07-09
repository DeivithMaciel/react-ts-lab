import { useEffect, useState } from "react"

import CardProdutos from "../../components/CardProdutos"
import Modal from "../../components/Modal"

import { useProdutosCompletos } from "../../utils/hooks"
import * as S from "./styles"
import { addProdutoCriado } from "../../utils/storage"

const Produtos = () => {
    const [modalAberta, setModalAberta] = useState(false)
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState('')

    const produtos = useProdutosCompletos()

    useEffect(() => {
        localStorage.setItem('produtos' , JSON.stringify(produtos))
    }, [produtos])

    return (
        <div>
            <S.List>
            {produtos.map((product) => (
                <CardProdutos key={product.id} produto={product} />
            ))}
        </S.List>
            <button onClick={(() => setModalAberta(true))}>Novo produto</button>
            <Modal 
            aberto={modalAberta} 
            onClose={(() => setModalAberta(false))}
            title="Novo produto">
                <input placeholder="Nome" value={nome} id="nome" onChange={((e) => setNome(e.target.value))} />
                <input placeholder="Preço" type="number" id="preco" value={preco} onChange={((e) => setPreco(e.target.value))} />
                <input placeholder="Imagem" value={imagem} id="imagem" onChange={((e) => setImagem(e.target.value))} />
                <S.Footer>
                <button
                onClick={(() => {
                addProdutoCriado({
                nome,
                preco: Number(preco),
                imagem,
                id: Number()
            })
            setNome('')
            setImagem('')
            setPreco('')
            setModalAberta(false)})}
                >Salvar</button>
                <button onClick={(() => {
                    setNome('')
                    setImagem('')
                    setPreco('')
                    setModalAberta(false)
                })}>Cancelar</button>
            </S.Footer>
            </Modal>
        </div>
    )
}

export default Produtos