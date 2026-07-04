import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import type { RootState, AppDispatch } from "./store/store"
import { addUserAPI, fetchUsuarios } from "./features/Usuarios/usuariosSlice"

import Card from "./components/Card"

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const usuarios = useSelector((state: RootState) => state.usuarios)

  const [nome, setNome] = useState('')
  const [busca, setBusca] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const usuariosAtivos = usuarios.filter((user) => user.ativo)
  const usuariosInativos = usuarios.filter((user) => !user.ativo)
  const nomesFiltrados = usuarios.filter((user) => user.nome.toLowerCase().includes(busca.toLowerCase()))

  useEffect(() => {
    dispatch(fetchUsuarios())
  })

  return (
    <div>
      <h1>React + Typescript</h1>
      <div>
        <span>👥Total de usuarios:{usuarios.length}</span>
        <span>🟢Ativos:{usuariosAtivos.length}</span>
        <span>🔴 Inativos:{usuariosInativos.length}</span>
        <span>🔍 Resultado da busca:{nomesFiltrados.length}</span>
      </div>
      <div>
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
        <button onClick={() => dispatch(addUserAPI(nome))}>Adicionar</button>
        <input onChange={((e) => setBusca(e.target.value))} value={busca} placeholder="buscar usuario" />
      </div>
      <ul>
        {nomesFiltrados.map((user) => (
          <Card
        key={user.id}
        user={user}
        />
        ))}
      </ul>
      <button onClick={(() => setDarkMode(!darkMode))}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <button></button>
    </div>
  )
}

export default App
