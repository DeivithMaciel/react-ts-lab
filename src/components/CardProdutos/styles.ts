import styled from "styled-components";

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
border-radius: 16px;
background-color: gray;
transition: transform .4s ease;

&:hover {
transform: translateY(-4px);
}

img {
    height: 128px;
    width: 128px;
    border-radius: 16px;
}
`