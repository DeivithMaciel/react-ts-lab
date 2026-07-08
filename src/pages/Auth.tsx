import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store/store"
import { login } from "../features/Auth/authSlice"
import { useState } from "react"

export const Auth = () => {
    const dispatch = useDispatch<AppDispatch>()

    const [ name, setName] = useState('')
    const [ email, setEmail] = useState('')

    return (
        <div>
            <h3>Login</h3>
            <div>
                <input type="text" value={name} onChange={((e) => setName(e.target.value))} placeholder="Nome" />
                <input type="email" value={email} onChange={((e) => setEmail(e.target.value))} placeholder="Email" />
            </div>
            <button onClick={(() => dispatch(login({name, email})))}>Login</button>
        </div>
    )
}

export default Auth