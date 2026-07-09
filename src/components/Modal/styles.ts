import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;

    background-color: rgba(0,0,0,.6);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 500px;
    background: #fff;
    border-radius: 12px;
    padding: 24px;
`

export const Header = styled.header`
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    border-bottom: 1px solid #000;

    input {
        margin-bottom: 8px;
    }
`