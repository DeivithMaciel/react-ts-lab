import { createPortal } from 'react-dom'

import { useToast } from '../../context/ToastContext'

import { Container } from './styles'

const Toast = () => {
    const {message, type} = useToast()
    if (!message) return null

    let icon = "❌"

    if (type === "success") icon = "✔"
    if (type === "warning") icon = "⚠️"

    return createPortal(
        <Container type={type}>
            <span>{icon}</span>
            <p>{message}</p>
        </Container>,
        document.body
    )
}

export default Toast