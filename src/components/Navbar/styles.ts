import styled from "styled-components";

export const Container = styled.div`
background-color: gray;


    ul {
        padding: 16px;
        display: flex;
        justify-content: space-between;
    }

    a {
        font-size: 24px;
        padding: 8px;
        color: black;
        border-radius: 8px;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background-color: #5a5a5a;
        }
    }

    .ativo {
        background-color: #e0e0e0;
    }
`