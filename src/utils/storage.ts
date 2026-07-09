import type { Produto } from "../types/Produto"


const STORAGE_KEY = 'produtosCriados'

export const getProdutosCriados = (): Produto[] => {
    const dados = localStorage.getItem(STORAGE_KEY)
    if (!dados) return []
    return JSON.parse(dados)
}

export const saveProdutosCriados = (produtos: Produto[]) => {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(produtos)
    )
}

export function addProdutoCriado(produto: Produto) {
    const dados = getProdutosCriados()
    const novoProduto = {
        ...produto,
        id: Date.now()
    }
    dados.push(novoProduto)
    saveProdutosCriados(dados)
}