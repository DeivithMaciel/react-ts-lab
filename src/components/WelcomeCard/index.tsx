import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import { Container } from "./styles"

export const Welcome = () => {
    const auth = useSelector((state: RootState) => state.auth)

    return (
        <Container>
            <h2>Olá {auth.isAuthenticated ? `${auth.user?.name}` : 'visitante'}</h2>
            <h3>Bem-vindo ao painel de aplicação</h3>
            <h5>Status: {auth.isAuthenticated ? 'Autentificado' : 'Não autentificado'}</h5>
        </Container>
    )
}

export default Welcome