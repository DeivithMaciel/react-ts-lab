import { describe, test, expect, vi } from "vitest"
import { renderHook, waitFor } from "@testing-library/react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { useProdutosQuery } from "./useProdutosQuery"

import * as produtosService from "../services/produtos"

const queryClient = new QueryClient()

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)
describe('usePRodutosQuery', () => {
    test('deve chamar getPRodutos corretamente', async () => {
        vi.spyOn(produtosService, "getProdutos")
            .mockResolvedValue({
                data: [],
                first: 1,
                prev: null,
                next: null,
                last: 1,
                pages: 1,
                items: 0
            })
        renderHook(
            () => useProdutosQuery(1,'Notebook'),
            {
                wrapper
            }
        )
        await waitFor(() => {
            expect(produtosService.getProdutos)
        .toHaveBeenCalledWith(
            1,
            "Notebook"
        )
        })
    })
})