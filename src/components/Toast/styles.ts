import styled, {keyframes} from "styled-components";

import type { ToastType } from "../../context/ToastContext";

type ContainerType = {
    type: ToastType
}

export const slideIn = keyframes`
    from {
        transform: translateX(120%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
`

// background-color: ${({type}) =>
//     type === 'success'
//     ? 'green'
//     : type === 'error'
//     ? 'red'
//     : 'gold'}
export const Container = styled.div<ContainerType>`
    background-color: black;

    color: #fff;
    position: fixed;
    top: 20px;
    right: 20px;

    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 24px;
    border-radius: 8px;
    font-weight: bold;
    z-index: 999;

    animation: ${slideIn} .3s ease;
`