import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/carrinho'}>Carrinho</Link>
        <Link to={'/produtos'}>Produtos</Link>
        <Link to={'/usuarios'}>Usuarios</Link>
    </div>
    )
} 

export default Navbar