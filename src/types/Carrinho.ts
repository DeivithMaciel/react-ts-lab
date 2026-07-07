import type { Produto } from "./Produto";

export type ItemCarrinho = Produto & {
    quantidade: number
}