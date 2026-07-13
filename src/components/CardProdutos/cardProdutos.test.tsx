import { Provider } from "react-redux"
import { describe, expect, test, vi } from "vitest"
import { render, screen } from "@testing-library/react"

import { store } from "../../store/store"

import CardProdutos from "./index"

describe("CardProdutos", () => {
    test("deve renderizar os dados do produto", () => {
        render(
            <Provider store={store}>
                <CardProdutos
                produto={{
                    id: "1",
                    nome: "Notebook",
                    preco: 3500,
                    imagem: "imagem.png"
                }}
                onEdit={vi.fn()}
                onDelete={vi.fn()}
            />
            </Provider>
        )

        expect(screen.getByText("Notebook")).toBeInTheDocument()

        expect(screen.getByText("R$ 3.500,00")).toBeInTheDocument()

        expect(
            screen.getByRole("img")
        ).toHaveAttribute("src", "imagem.png")
    })
})