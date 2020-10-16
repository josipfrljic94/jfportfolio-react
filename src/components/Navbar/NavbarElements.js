import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

export const Nav=styled.nav`
background:#010606;
height:${({scroll})=>(scroll ? "10vh": "12vh")};
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
width:100%;
position:${({scroll})=>(scroll ? "fixed": "static")};
  top: 0;
transition:all 0.35s ease-in-out;
z-index:99999;
border-bottom:${({scroll})=>(scroll ? "none": "0.1px solid #fff")};

@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`;
export const NavbarContainer= styled.div`
display:flex;
justify-content:space-between;
height:100%;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;
`;

export const NavLogo=styled(LinkR)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none; 
`;

export const MobileIcon=styled.div`
display:none;

@media screen and (max-width:768px){
    display:block;
   
    top:0%;
    right:0%;
    transform:translate(-100%,35%);
    font-size:1.8rem;
    cursor:pointer;
    color:#fff;
  
}
`
export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-22px; 
justify-content:space-around;
width:400px;
@media screen and (max-width: 768px){
   display:none;
}
`
export const NavItem= styled.li`
height:15vh;
`
export const NavLinks= styled(LinkR)`
display:flex;
color:#fff;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;

&.active{
    border-bottom:3px solid #fafa10;
}
`;

export const NavBtn= styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:768px){
    display:none;
}
`

export const NavBtnLink= styled(LinkR)`
border-radius:30px;
background:#fafa10;
white-space:nowwrap;
padding:9px 20px;
color:#0a0a10;
font-size:1rem;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:#0a0a10;
   color:#fafafa;
   border:1px solid #fafa10;
}
`;
