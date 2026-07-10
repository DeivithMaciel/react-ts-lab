import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import CardProdutos from "../../components/CardProdutos"
import Modal from "../../components/Modal"

import { useToast } from "../../context/ToastContext"
import { useProdutosCompletos } from "../../hooks/hooks"
import { addProdutoCriado } from "../../utils/storage"
import { produtoSchema, type ProdutoFormData } from "../../schemas/produtoSchema"

import * as S from "./styles"


const Produtos = () => {
    const [modalAberta, setModalAberta] = useState(false)

    const produtos = useProdutosCompletos()

    useEffect(() => {
        localStorage.setItem('produtos' , JSON.stringify(produtos))
    }, [produtos])

    const { showToast } = useToast()

    const closeModal = useCallback(() => {
        setModalAberta(false)
    }, [])

    const { register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProdutoFormData>({
        resolver: zodResolver(produtoSchema)
    })

    function onSubmit(data: ProdutoFormData) {
        addProdutoCriado({
            id: crypto.randomUUID(),
            nome: data.nome,
            preco: data.preco,
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
                {errors.nome && (
                    <span>{errors.nome.message}</span>
                )}
                <input placeholder="Preço" type="number" {...register('preco', {
                    valueAsNumber: true
                })}  />
                {errors.preco && (
                    <span>{errors.preco.message}</span>
                )}
                <input placeholder="Imagem" {...register('imagem')} />
                {errors.imagem && (
                    <span>{errors.imagem.message}</span>
                )}
                <S.Footer>
                <button
                onClick={handleSubmit(onSubmit)}
                >Salvar</button>
                <button onClick={(() => {
                    reset()
                    closeModal()
                })}>Cancelar</button>
            </S.Footer>
            </Modal>
        </div>
    )
}

export default Produtos