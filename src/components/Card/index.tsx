import { useDispatch } from "react-redux"

import type { AppDispatch } from "../../store/store"
import type { Usuario } from "../../types/Usuario"
import { editUser,toggleActive,removeUserAPI } from "../../features/Usuarios/usuariosSlice"

type CardProps = {
    user: Usuario
}

export const Card = ({user}: CardProps) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <li>
            <h3>{user.nome}</h3>
            <p>{user.ativo ? "🟢 Ativo" : "🔴 Inativo"}</p>
            <button onClick={(() => dispatch(toggleActive(user.id)))}>{user.ativo ? 'Desativar' : 'Ativar'}</button>
            <button onClick={(() => dispatch(editUser({id:user.id, novoNome: user.nome})))}>Editar usuario</button>
            <button onClick={(() => dispatch(removeUserAPI(user.id)))}>Remover usuario</button>
        </li>
    )
}

export default Card