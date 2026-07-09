import { createPortal } from 'react-dom'
import { UseToast } from '../../context/toastContext'
import { Container } from './styles'

const Toast = () => {
    const {message} = UseToast()
    if (!message) return null

    return createPortal(
        <Container>
            {message}
        </Container>,
        document.body
    )
}

export default Toast