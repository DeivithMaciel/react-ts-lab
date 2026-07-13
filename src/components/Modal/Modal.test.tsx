import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event"

import Modal from ".";

describe('Modal', () => {
    test('deve renderizar quando aberto', () => {
        render(
            <Modal
            aberto={true}
            onClose={vi.fn()}
            title="Novo Produto">
                <p>Conteúdo Modal</p>
            </Modal>
        )
        expect(screen.getByText('Novo Produto')).toBeInTheDocument()
        expect(screen.getByText('Conteúdo Modal')).toBeInTheDocument()
    })
    test("não deve renderizar quando fechado", () => {
    render(
        <Modal
            aberto={false}
            onClose={vi.fn()}
            title="Novo produto"
        >
            <p>Conteúdo</p>
        </Modal>
    )
    expect(
        screen.queryByText("Conteúdo")
    ).not.toBeInTheDocument()
    })
    test("deve chamar onClose ao clicar no botão fechar", async () => {
    const user = userEvent.setup()

    const onClose = vi.fn()

    render(
        <Modal
            aberto
            onClose={onClose}
            title="Novo produto"
        >
            <p>Conteúdo</p>
        </Modal>
    )

    await user.click(
        screen.getByRole("button", {
            name: "X"
        })
    )

    expect(onClose).toHaveBeenCalled()
    })
    test("deve fechar ao clicar no overlay", async () => {
    const user = userEvent.setup()

    const onClose = vi.fn()

    render(
        <Modal
            aberto
            onClose={onClose}
            title="Novo produto"
        >
            <p>Conteúdo</p>
        </Modal>
    )

    await user.click(
        screen.getByTestId("overlay")
    )

    expect(onClose).toHaveBeenCalled()
    })
    test("não deve fechar ao clicar dentro do modal", async () => {
    const user = userEvent.setup()

    const onClose = vi.fn()

    render(
        <Modal
            aberto
            onClose={onClose}
            title="Novo produto"
        >
            <p>Conteúdo</p>
        </Modal>
    )

    await user.click(
        screen.getByTestId("container")
    )

    expect(onClose).not.toHaveBeenCalled()
    })
})