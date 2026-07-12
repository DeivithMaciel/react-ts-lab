import { describe, expect, test } from "vitest"
import { produtoSchema } from "./produtoSchema"

describe('produtosSchema', () => {
    test('Deve aceitar um produto valido', () => {
        const result = produtoSchema.safeParse({
            nome: 'Notebook',
            preco: 2500,
            imagem: "https://teste.com/notebook.png"
        })
        expect(result.success).toBe(true)
    })
    test('Deve rejeitar nome vazio', () => {
        const result = produtoSchema.safeParse({
            nome: "",
            preco: 2500,
            imagem: "https://teste.com/notebook.png"
        })
        expect(result.success).toBe(false)
    })
    test("deve rejeitar preço negativo", () => {
        const result = produtoSchema.safeParse({
            nome: "Notebook",
            preco: -100,
            imagem: "https://teste.com/notebook.png"
        })
        expect(result.success).toBe(false)
    })
    test("deve rejeitar imagem inválida", () => {
        const result = produtoSchema.safeParse({
            nome: "Notebook",
            preco: 2500,
            imagem: "abc"
        })
        expect(result.success).toBe(false)
    })
    test("deve rejeitar imagem vazia", () => {
        const result = produtoSchema.safeParse({
            nome: "Notebook",
            preco: 2500,
            imagem: ""
        })
        expect(result.success).toBe(false)
    })
})