import styled from "styled-components"

export const List = styled.ul`
background-color: #c5c4c4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    list-style: none;
    padding: 16px;
    gap: 48px;

    li {
        border: 1px solid #000;
        border-radius: 8px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h3 {
        margin: 0;
    }
`