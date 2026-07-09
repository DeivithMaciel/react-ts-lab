import { createContext, useContext, useState } from "react"

export type ToastType = 'success' | 'error' | 'warning'

export type ToastContextType = {
    message: string
    showToast: (message: string, type: ToastType) => void
    type: ToastType
}

const ToastContext = createContext<ToastContextType | null>(null)

export const ToastProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState<ToastType>('success')

    function showToast(
        message: string,
        type: ToastType
    ) {
        setType(type)
        setMessage(message)

        setTimeout(() => {
            setMessage("")
        }, 3000)
    }

    return (
        <ToastContext.Provider
        value={{
            message,
            showToast,
            type,
        }}>
            {children}
        </ToastContext.Provider>
    )
}

export const UseToast = () => {
    const context = useContext(ToastContext)

    if (!context) {
        throw new Error('useToast deve ser usado dentro de ToastProvider')
    }
    return context
}

export default ToastContext