import { useQuery } from "@tanstack/react-query";

import { getProdutos } from "../services/produtos";

export function useProdutosQuery(page: number, search: string) {
    return useQuery({
        queryKey: ['produtos', page, search,],
        queryFn: () => getProdutos(page, search),
        placeholderData: (previousData) => previousData
    })
}