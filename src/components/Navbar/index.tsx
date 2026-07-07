import { NavLink } from "react-router-dom"

import { Container } from "./styles"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"

export const Navbar = () => {
    const carrinho = useSelector((state:RootState) => state.carrinho)

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
        <NavLink to={'/carrinho'}
        className={({ isActive }) => 
        isActive ? 'ativo' : '' }
        >🛒{total}</NavLink>
        </ul>
    </Container>
    )
} 

export default Navbar