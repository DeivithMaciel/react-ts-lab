import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"

import type { Produto } from "../../types/Produto"

import CardProdutos from "../../components/CardProdutos"
import Modal from "../../components/Modal"

import { useToast } from "../../context/ToastContext"
import { produtoSchema, type ProdutoFormData } from "../../schemas/produtoSchema"
import { useProdutosQuery } from "../../hooks/useProdutosQuery"
import { useCreateProduto, useDeleteProduto, useUpdateProduto } from "../../hooks/useCreateProdutos"

import * as S from "./styles"


const Produtos = () => {
    const [modalAberta, setModalAberta] = useState(false)
    const [excluirModal, setExcluirModal] = useState<Produto | null>(null)
    const [editingProduct, setEditingProduct] = useState<Produto | null>(null)

    const { mutate: createProduto } = useCreateProduto()
    const { mutate: updateProduto } = useUpdateProduto()
    const {mutate: deleteProduto} = useDeleteProduto()

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
        if (editingProduct) {
            updateProduto({
                id: editingProduct.id,
                nome: data.nome,
                preco: data.preco,
                imagem: data.imagem
            }, {
                onSuccess() {
                    showToast('Sucesso ao editar o produto', 'success')
                    reset()
                    setEditingProduct(null)
                    closeModal()
                },
                onError() {
                    showToast('Falha ao editar o oroduto', 'error')
                }
            })
        } else {
            createProduto({
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
    }

    function handleEdit(produto: Produto) {
        setEditingProduct(produto)
        reset(produto)
        setModalAberta(true)
    }

    function onDelete(id: string) {
        deleteProduto(id, {
            onSuccess() {
                showToast('Excluído com sucesso', 'success')
            },
            onError() {
                showToast('Falha ao excluir', 'error')
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
                <CardProdutos key={product.id} produto={product} onEdit={handleEdit} onDelete={setExcluirModal} />
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
                >{editingProduct ? 'Atualizar' : 'Criar'}</button>
                <button onClick={(() => {
                    reset()
                    closeModal()
                })}>Cancelar</button>
            </S.Footer>
            </Modal>
            <Modal
            aberto={excluirModal !== null}
            onClose={closeModal}
            title="Excluir produto"
            >
                <p>
        Tem certeza que deseja excluir{" "}
        <strong>{excluirModal?.nome}</strong>?
    </p>
    <S.Footer>
        <button
            onClick={() => setExcluirModal(null)}
        >
            Cancelar
        </button>
        <button
            onClick={() => {
                if (!excluirModal) return
                onDelete(excluirModal.id)
                setExcluirModal(null)
            }}
        >
            Excluir
        </button>
    </S.Footer>
            </Modal>
        </div>
    )
}

export default Produtos