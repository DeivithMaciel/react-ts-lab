import type { PaginatedResponse } from "../types/PaginatedResponse";
import type { Produto } from "../types/Produto";
import { api } from "./api";

export async function getProdutos(page: number, search: string) {
    const { data } = await api.get<PaginatedResponse<Produto>>("/produtos",
        {
            params: {
                _page: page,
                _per_page: 8,
                ...(search && { "nome:contains": search })
            },
        }
    )
    return data
}

export async function createProduto(produto: Produto) {
    const {data} = await api.post<Produto>('/produtos', produto)
    return data
}

export async function updateProduto(produto: Produto) {
    const { data } = await api.put<Produto>(`/produtos/${produto.id}`,produto)
    return data
}

export async function deleteProduto(id:string) {
    const { data } = await api.delete(`/produtos/${id}`)
    return data
}