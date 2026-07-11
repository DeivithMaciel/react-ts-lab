import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"

import CardProdutos from "../../components/CardProdutos"
import Modal from "../../components/Modal"

import { useToast } from "../../context/ToastContext"
import { produtoSchema, type ProdutoFormData } from "../../schemas/produtoSchema"
import { useProdutosQuery } from "../../hooks/useProdutosQuery"
import { useCreateProduto } from "../../hooks/useCreateProdutos"

import * as S from "./styles"


const Produtos = () => {
    const [modalAberta, setModalAberta] = useState(false)

    const { mutate } = useCreateProduto()

    const {
    data: produtos,
    isLoading,
    error
} = useProdutosQuery()

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
        mutate({
            id: crypto.randomUUID(),
            nome: data.nome,
            preco: data.preco,
            imagem: data.imagem
        }, {
            onSuccess() {
                showToast('Sucesso ao criar o produto', 'success')
                reset()
                closeModal()
            },
            onError() {
                showToast('Falha ao criar o produto', 'error')
            }
        })
    }

    const listaProdutos = produtos ?? []

    if (isLoading) {
        return <h2>Carregando produtos...</h2>
    }

    if (error) {
        return <h2>Erro ao carregar produtos.</h2>
    }


    return (
        <div>
            <S.List>
            {listaProdutos.map((product) => (
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