import { createContext, useContext, useState } from "react"

export type ToastContextType = {
    message: string
    showToast: (message: string) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export const ToastProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [message, setMessage] = useState('')

    function showToast(message: string) {
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