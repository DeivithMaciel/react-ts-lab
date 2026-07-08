import { NavLink } from "react-router-dom"

import { Container } from "./styles"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"

export const Navbar = () => {
    const carrinho = useSelector((state:RootState) => state.carrinho)
    const auth = useSelector((state:RootState) => state.auth)

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
        <h4>{auth.isAuthenticated ? `Olá, ${auth.user?.name}` : ''}</h4>
        <NavLink to={'/auth'}
        className={({ isActive }) => 
            isActive ? 'ativo' : '' }>
        {auth.isAuthenticated ? 'Logout' : 'Login'}</NavLink>
        {auth.isAuthenticated 
        ? (
            <NavLink to={'/carrinho'}
            className={({ isActive }) => 
            isActive ? 'ativo' : '' }
            >🛒{total}</NavLink>
        ) : (
            <a onClick={(() => alert('Você não está conectado'))}>🛒{total}</a>
        )}
        </ul>
    </Container>
    )
} 

export default Navbar