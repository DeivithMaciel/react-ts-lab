import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store/store"
import { login, logout } from "../features/Auth/authSlice"
import { useState } from "react"
import { useAuth } from "../hooks/hooks"

export const Auth = () => {
    const authetication = useAuth()
    const dispatch = useDispatch<AppDispatch>()

    const [ name, setName] = useState('')
    const [ email, setEmail] = useState('')

    return (
        <div>
            <h3>Login</h3>
            {authetication.isAuthenticated ? (
                <div>
                    <h4>Você está logado</h4>
                    <button onClick={(() => dispatch(logout()))}>Logout</button>
                </div>
            ) : (
            <div>
                <h4>Voce não está logado</h4>
                <input type="text" value={name} onChange={((e) => setName(e.target.value))} placeholder="Nome" />
                <input type="email" value={email} onChange={((e) => setEmail(e.target.value))} placeholder="Email" />
                <button onClick={(() => {
                dispatch(login({name, email}))
                setEmail('')
                setName('')})}
                    >Login</button>
            </div>
            )}
        </div>
    )
}

export default Auth