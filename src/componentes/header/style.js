import styled from "styled-components";

export const ContainerHeader = styled.header`
    display:flex;
    justify-content:center;
    width:100%;
    color: antiquewhite;
    background: #1A2980;
    background: -webkit-linear-gradient(to right,#1A2980, #26D0CE );
    background: linear-gradient(to right,#1A2980, #26D0CE);
`
export const Cabecalho = styled.div`
    display:flex;
    width:60%;
    flex-direction:column;
    justify-content:center;
    @media(max-width:769px){
        width:80%;
    }
`
export const Row1= styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:2rem;
`
export const Row2= styled.div`
    display:flex;
    margin-bottom:2rem;
    align-items:center;
`
export const Paragrafo= styled.p`
    font-size:1.5em;
    font-family:'Lucida Sans','Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-transform:capitalize;
`
export const Input= styled.input`
    width:100%;
    font-size:1em;
    border:none;
    height:3rem;
    background-color: rgba(255,255,255,.2);
    padding-left:2rem;
`
export const Icone= styled.i`
    position:absolute;
    margin-left:0.4rem;
`