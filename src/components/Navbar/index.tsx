import { NavLink } from "react-router-dom"

import { Container } from "./styles"

export const Navbar = () => {
    return (
        <Container>
        <ul>
            <NavLink to={'/'}
        className={({ isActive }) => 
        isActive ? 'ativo' : '' }
        >Home</NavLink>
        <NavLink to={'/carrinho'}
        className={({ isActive }) => 
        isActive ? 'ativo' : '' }
        >Carrinho</NavLink>
        <NavLink to={'/produtos'}
        className={({ isActive }) => 
        isActive ? 'ativo' : '' }
        >Produtos</NavLink>
        <NavLink to={'/usuarios'} 
        className={({ isActive }) => 
        isActive ? 'ativo' : '' }
        >Usuarios</NavLink>
        </ul>
    </Container>
    )
} 

export default Navbar