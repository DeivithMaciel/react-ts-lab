import { z } from 'zod'

export const produtoSchema = z.object({
    nome: z
        .string()
        .min(3, "O nome deve ter pelo menos 3 caracteres"),

    preco: z
        .number()
        .positive("O preço deve ser maior que zero"),

    imagem: z
        .string()
        .min(1, "Informe a imagem")
})

export type ProdutoFormData = z.infer<typeof produtoSchema> 