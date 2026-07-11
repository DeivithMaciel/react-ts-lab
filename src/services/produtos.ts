import { API_PRODUTOS } from "./api";

export async function getProdutos() {
    const res = await fetch(API_PRODUTOS)
    if (!res.ok) {
        throw new Error('Erro ao buscar produtos')
    }
    return res.json()
}