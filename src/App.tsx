import { useState } from "react"

function App() {
  type Usuario = {
    id: number
    nome: string
    ativo: boolean
  }

  const [usuarios, setUsuarios] = useState<Usuario[]>([
    {
      id: 1,
      nome: 'Ana',
      ativo: true
    }
  ])

  return (
    <div>
      <h1>React + Typescript</h1>
    </div>
  )
}

export default App
