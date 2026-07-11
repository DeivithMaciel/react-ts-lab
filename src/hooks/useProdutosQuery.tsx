import { useQuery } from "@tanstack/react-query";

import { getProdutos } from "../services/produtos";

export function useProdutosQuery() {
    return useQuery({
        queryKey: ['produtos'],
        queryFn: getProdutos
    })
}