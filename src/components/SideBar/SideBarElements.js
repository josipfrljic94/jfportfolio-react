import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

export const SideBarContainer = styled.aside `
position:fixed;
z-index:999;
width:100%;
height:100vh;
background:#0a0a10;
display:grid;
align-items:center;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen})=>(isOpen ? "100%" :"0")};
top: ${({isOpen})=>(isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes) `
color:#fff;
`

export const Icon= styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
font-size:2rem;
cursor:pointer;
`

export const SideBarContent= styled.div`
color:#fff;
`
export const SideBarMenu= styled.ul `
display:grid;
height:100%;

grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;

@media screen and (max-width:480px){
    grid-template-rows:repeat()(6,60px);
}

`
export const SideBarLink= styled(LinkS)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
text-transform:capitalize;
transition:0.2s ease-in-out;
text-decoration:none;
color:#fff;
cursor:pointer;

&:hover{
    color:#fafa10;
    transition:0.15s ease-in-out;
}
`

export const SideBtnWrap= styled.div `
display:flex;
justify-content:center;
text-align:center;
`
export const SideBarRoute= styled(LinkR)`
border-radius:50px;
background:#fafa10;
white-space:nowrap;
padding:16px 55px;
color:#0a0a10;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition:all 0.2s ease-in-out;
    background:#0a0a10;
    color:#fafa10;
}
`
