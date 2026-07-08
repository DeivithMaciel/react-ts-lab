import styled from "styled-components";

export const Container = styled.div`
background-color: gray;


    ul {
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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

    h4 {
        font-size: 18px;
    }

    .ativo {
        background-color: #e0e0e0;
    }

    button {
        font-size: 18px;
        background-color: gray;
        padding: 8px;
        border: none;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
            background-color: #5a5a5a;
        }
    }
`