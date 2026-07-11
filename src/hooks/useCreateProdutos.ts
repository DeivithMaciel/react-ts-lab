import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createProduto } from "../services/produtos"

export function useCreateProduto() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createProduto,
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['produtos']
            })
        }
    })
}



