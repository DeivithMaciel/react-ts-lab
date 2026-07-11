import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createProduto, deleteProduto, updateProduto } from "../services/produtos"

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

export function useDeleteProduto() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteProduto,
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['produtos']
            })
        }
    })
}

export function useUpdateProduto() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: updateProduto,
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['produtos']
            })
        }
    })
}