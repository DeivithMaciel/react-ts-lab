import type { Usuario } from "../../types/Usuario"

type CardProps = {
    user: Usuario
    removeUser: (id: number) => void
    editUser: (id: number, novoNome: string) => void
    activeToggle: (id: number) => void
}

export const Card = ({
    user,
    removeUser,
    editUser,
    activeToggle
}: CardProps) => {
    return (
        <li>
            <h3>{user.nome}</h3>
            <p>{user.ativo ? "🟢 Ativo" : "🔴 Inativo"}</p>
            <button onClick={(() => activeToggle(user.id))}>{user.ativo ? 'Desativar' : 'Ativar'}</button>
            <button onClick={(() => editUser(user.id, user.nome))}>Editar usuario</button>
            <button onClick={(() => removeUser(user.id))}>Remover usuario</button>
        </li>
    )
}

export default Card