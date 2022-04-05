import styled from "styled-components";

export const ContainerMain = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    background:#F3F5F7;
`
export const ContainerCards = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:2rem;
    justify-content:center;
    width:60%;
    @media(max-width:769px){
        width:80%;
    }
`