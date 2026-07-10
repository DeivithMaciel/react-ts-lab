import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import CardProdutos from "../../components/CardProdutos"
import Modal from "../../components/Modal"

import { UseToast } from "../../context/ToastContext"
import { useProdutosCompletos } from "../../hooks/hooks"
import { addProdutoCriado } from "../../utils/storage"

import * as S from "./styles"

type FormData = {
    nome: string
    preco: number
    imagem: string
}

const Produtos = () => {
    const [modalAberta, setModalAberta] = useState(false)

    const produtos = useProdutosCompletos()

    useEffect(() => {
        localStorage.setItem('produtos' , JSON.stringify(produtos))
    }, [produtos])

    const { showToast } = UseToast()

    const closeModal = useCallback(() => {
        setModalAberta(false)
    }, [])

    const { register, handleSubmit, reset } = useForm<FormData>()

    function onSubmit(data: FormData) {
        addProdutoCriado({
            id: Date.now(),
            nome: data.nome,
            preco: Number(data.preco),
            imagem: data.imagem
        })
        showToast("Produto criado com sucesso", 'success')
        closeModal()
        reset()
    }

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
            onClose={closeModal}
            title="Novo produto">
                <input placeholder="Nome"  {...register('nome')} />
                <input placeholder="Preço" type="number" {...register('preco')}  />
                <input placeholder="Imagem" {...register('imagem')} />
                <S.Footer>
                <button
                onClick={handleSubmit(onSubmit)}
                >Salvar</button>
                <button onClick={(() => {
                    reset()
                    setModalAberta(false)
                })}>Cancelar</button>
            </S.Footer>
            </Modal>
        </div>
    )
}

export default Produtos