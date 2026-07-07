import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    list-style: none;
`

export const ItemList = styled.li`
    display: flex;
    flex-direction: column;
    background-color: #e3e3e3;
    padding: 8px;
    align-items: center;
    border-radius: 8px;

    img {
        height: 180px;
        width: 180px;
    }

    div {
        display: flex;
        gap: 8px;
    }
`