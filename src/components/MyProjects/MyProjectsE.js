import styled from "styled-components";
export const ServicesContainer=styled.div`
width:100%;
min-height:80vh;
display:grid;
justify-items:center;
align-items:center;
background:#fafafa;

@media screen and (max-width:1080px){
    min-height:145vh;

}
@media screen and (max-width:768px){
    min-height:145vh;

}
@media screen and (max-width:480px){
    min-height:165vh;
}
`

export const ServicesWrapper= styled.div`
max-width:90%;
margin:0 auto;
display:grid;
width:100%;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-auto-rows:340px;
align-items:center;
justify-content:center;
grid-gap:15px;
padding:5% 50px;
@media screen and (max-width:1080px){
   padding:5px 25px;

}
@media screen and (max-width:768px){
    padding:5px 20px;

}
@media screen and (max-width:480px){
    padding:4px 10px;
}

`
export const ServiceCard= styled.div`
background:#fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
height:280px;
max-height:100%;
padding:30px;
box-shadow:3px 2px 6px #a9a9a9;
transition:all 0.2s ease-in-out;
cursor:pointer;
&:hover{
transform:scale(1.015);
transition: all 0.2s ease-in-out;
}
`

export const ServiceImg= styled.img`
height:100px;
width:160px;
margin-bottom:10px;
`
export const ServiceH1= styled.h1`
font-size:48px;
font-weight:800;
color:#000010;
margin-bottom:64px;
text-transform:capitalize;
@media screen and (max-width:480px){
    font-size:2rem;
}
`

export const ServiceH2= styled.h2`
font-size:1rem;
margin-bottom:10px;
`
export const ServiceP=styled.p`
font-size:1rem;
text-align:center;
height:80px;
overflow:hidden;
`



export const ServiceBtn= styled.a`
border:none;
color:#ffff10;
background:#0a0a0a;
border-radius: 16px;
text-decoration:none;
list-style:none;
padding:2% 5%;
`

