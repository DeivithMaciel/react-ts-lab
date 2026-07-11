import { useQuery } from "@tanstack/react-query";

import { getProdutos } from "../services/produtos";

export function useProdutosQuery(page: number) {
    return useQuery({
        queryKey: ['produtos', page],
        queryFn: () => getProdutos(page)
    })
}