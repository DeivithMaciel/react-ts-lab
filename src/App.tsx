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

  function removeUser(id: number) {
    const novaLista = usuarios.filter((user) => user.id !== id)
    setUsuarios(novaLista)
  }

  function activeToggle(id: number) {
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

  function editUser (id: number, novoNome: string) {
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

  return (
    <div>
      <h1>React + Typescript</h1>
      <ul>
        {usuarios.map((user) => (
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
    </div>
  )
}

export default App
