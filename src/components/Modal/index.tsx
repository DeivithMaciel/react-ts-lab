import * as S from './styles'

type ModalProps = {
    aberto: boolean
    onClose: () => void
    children: React.ReactNode
    title: string
}

const Modal = ({ aberto, onClose, children, title }: ModalProps) => {
    if (!aberto) {
        return null
    }
    return (
        <S.Overlay data-testid='overlay' onClick={(() => onClose())}>
            <S.Container data-testid='container' onClick={((e) => e.stopPropagation())}>
            <S.Header>
                <h2>{title}</h2>
                <button onClick={(() => onClose())}>X</button>
            </S.Header>
            <S.Content>
                {children}
            </S.Content>
        </S.Container>
        </S.Overlay>
    )
}

export default Modal