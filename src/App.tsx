import { useState } from "react"

import type { Usuario } from "./types/Usuario"

function App() {
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
