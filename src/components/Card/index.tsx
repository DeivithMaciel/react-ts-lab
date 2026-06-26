import type { Usuario } from "../../types/Usuario"

type CardProps = {
    user: Usuario
    removeUser (id: number) => void
    editUser: (id: number, novoNome: string) => void
    activeToggle: (id: number) => void

export const Card = ({
    user,
    removerUser,
    editUser,
    activeToggle
}:CardProps) => {
    }
    return (
        <li>
            card
        </li>
    )
}

export default Card