import styled from "styled-components";

export const FooterContainer= styled.div`
min-height:60vh;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#000;

@media screen and (max-width:768px){
    min-height:100vh;
}
@media screen and (max-width:460px){
    min-height:120vh;
}
`
export const FooterWrapper= styled.div`

width:90%;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
grid-auto-rows:320px;
gap:10px;
padding:0 30px;

@media screen and (max-width:768px){
    padding:4px 10px;
}
@media screen and (max-width:460px){
    padding:2px 0px;
}
`
export const FooterItem= styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#010404;

`
export const FooterItemH1= styled.h1`
text-align:center;
font-size:2.0rem;
color:#ffff10;
text-transform:capitalize;
`
export const FooterItemMenu=styled.ul`
height:160px;
display:flex;
flex-direction:column;
justify-items:center;
justify-content:center;
justify-content:space-between;
list-style:none;
text-align:center;
padding:0 20px;
`
export const FooterLi= styled.li`
justify-self:center;
text-transform:capitalize;
font-size:1.0rem;
color:#fafafa;

`