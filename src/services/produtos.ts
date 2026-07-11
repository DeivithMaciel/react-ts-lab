import type { Produto } from "../types/Produto";
import { api } from "./api";

export async function getProdutos() {
    const { data } = await api.get<Produto[]>('/produtos')
    return data
}

export async function createProduto(produto: Produto) {
    const {data} = await api.post<Produto>('/produtos', produto)
    return data
}