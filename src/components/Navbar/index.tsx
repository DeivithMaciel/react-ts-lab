import { NavLink } from "react-router-dom"

import { Container } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"
import { logout } from "../../features/Auth/authSlice"

export const Navbar = () => {
    const carrinho = useSelector((state:RootState) => state.carrinho)
    const auth = useSelector((state:RootState) => state.auth)

    const dispatch = useDispatch<AppDispatch>()

    const total = carrinho.reduce((acum, item) => {
        return acum + item.quantidade
    }, 0)

    return (
        <Container>
        <ul>
            <NavLink to={'/'}
        className={({ isActive }) => 
        isActive ? 'ativo' : '' }
        >Home</NavLink>
        <NavLink to={'/produtos'}
        className={({ isActive }) => 
            isActive ? 'ativo' : '' }
        >Produtos</NavLink>
        <NavLink to={'/usuarios'} 
        className={({ isActive }) => 
            isActive ? 'ativo' : '' }
        >Usuarios</NavLink>
        <h4>{auth.isAuthenticated ? `Olá, ${auth.user?.name}` : 'Bem vindo'}</h4>
        {auth.isAuthenticated 
        ? (
            <button onClick={(() => dispatch(logout()))}>Logout</button>
        ) : (
            <NavLink to={'/auth'}
        className={({ isActive }) => 
            isActive ? 'ativo' : '' }>
        Login</NavLink>
        )}
            <NavLink to={'/carrinho'}
            className={({ isActive }) => 
            isActive ? 'ativo' : '' }
            >🛒{total}</NavLink>
        </ul>
    </Container>
    )
} 

export default Navbar