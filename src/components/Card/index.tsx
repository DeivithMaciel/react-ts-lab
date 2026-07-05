import { useDispatch } from "react-redux"

import type { AppDispatch } from "../../store/store"
import type { Usuario } from "../../types/Usuario"
import { editUserAPI,toggleActiveAPI,removeUserAPI } from "../../features/Usuarios/usuariosSlice"
import { useState } from "react"

type CardProps = {
    user: Usuario
}

export const Card = ({user}: CardProps) => {
    const [editando, setEditando] = useState(false)
    const [newName, setNewName] = useState('')
    const dispatch = useDispatch<AppDispatch>();

    return (
        <li>
            {editando ? (
                <input 
                value={newName}
                onChange={((e) => setNewName(e.target.value))}
                />
            ) : (
                <h3>{user.nome}</h3>
            )}
            <p>{user.ativo ? "🟢 Ativo" : "🔴 Inativo"}</p>
            <button onClick={(() => dispatch(toggleActiveAPI({id: user.id, ativo: user.ativo})))}>{user.ativo ? 'Desativar' : 'Ativar'}</button>
            {editando ? (
                <>
                    <button onClick={(() => {
                        dispatch(editUserAPI({id: user.id, novoNome: newName}))
                        setEditando(false)
                    })}>Salvar</button>
                    <button onClick={(() => {
                        setEditando(false)
                        setNewName(user.nome)
                    })}>Cancelar</button>
                </>
            ) : (
                <button onClick={(() => {
                    setEditando(true)
                    setNewName(user.nome)
                })}>Editar nome</button>
            )}
            <button onClick={(() => dispatch(removeUserAPI(user.id)))}>Remover usuario</button>
        </li>
    )
}

export default Card