import { useState } from "react"

import type { Usuario } from "./types/Usuario"
import Card from "./components/Card"

function App() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    {
      id: 1,
      nome: 'Ana',
      ativo: true
    },
    {
      id: 2,
      nome: 'João',
      ativo: false
    }
  ])
  const [nome, setNome] = useState('')
  const [busca, setBusca] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const usuariosAtivos = usuarios.filter((user) => user.ativo)
  const usuariosInativos = usuarios.filter((user) => !user.ativo)

  function addUser(nome: string) {
    if (!nome.trim()) return
    const usuarioExiste = usuarios.find((user) => user.nome.toLowerCase() === nome.toLowerCase())
    if(!usuarioExiste) {
      const novoUsuario = {
        id: Date.now(),
        nome: nome,
        ativo: true
      }
      setUsuarios([...usuarios, novoUsuario])
      setNome('')
    } else {
      alert('Usuario já existente')
    }
  }

  function removeUser(id: number): void {
    const novaLista = usuarios.filter((user) => user.id !== id)
    setUsuarios(novaLista)
  }

  function activeToggle(id: number): void {
    const novaLista = usuarios.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ativo: !user.ativo
        }
      }
      return user
    })
    setUsuarios(novaLista)
  }

  function editUser (id: number, novoNome: string): void {
    const novaLista = usuarios.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          nome: novoNome
        }
      }
      return user
    })
    setUsuarios(novaLista)
  }

    const nomesFiltrados = usuarios.filter((user) => user.nome.toLowerCase().includes(busca.toLowerCase()))

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
        <button onClick={() => addUser(nome)}>Adicionar</button>
        <input onChange={((e) => setBusca(e.target.value))} value={busca} placeholder="buscar usuario" />
      </div>
      <ul>
        {nomesFiltrados.map((user) => (
          <Card
        key={user.id}
        user={user}
        editUser={editUser}
        activeToggle={activeToggle}
        removeUser={removeUser}
        />
        ))}
      </ul>
      <button onClick={(() => setDarkMode(!darkMode))}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <button></button>
    </div>
  )
}

export default App
