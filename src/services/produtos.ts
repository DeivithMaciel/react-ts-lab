import type { Produto } from "../types/Produto";
import { API_PRODUTOS } from "./api";

export async function getProdutos() {
    const res = await fetch(API_PRODUTOS)
    if (!res.ok) {
        throw new Error('Erro ao buscar produtos')
    }
    return (await res.json()) as Produto[]
}

export async function createProduto(produto: Produto) {
    const res = await fetch(API_PRODUTOS , {
        'method': 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(produto)
    })
    if (!res.ok) {
        throw new Error ('Erro ao criar produto')
    }
    return res.json()
}