import styled from "styled-components";


export const SectionContainer=styled.div`
color:#fff;
background:${({lightBg})=>(lightBg ? "#fafafa" : "#010606")};

@media screen and (max-width:768px){
    padding:100px 0;
}
`

export const SectionWrapper= styled.div`
display:grid;
z-index:1;
height:860px;
width:100%auto;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 24px;
justify-content:center;
`
export const SectionRow= styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgStart})=>(imgStart ?  `"col2 col1"`: `"col1 col2"`)};

@media screen and (max-width:768px){
    grid-template-areas: ${({imgStart})=>(imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`)};
}
`
export const Column1= styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`
export const Column2= styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col2;
`

export const TextWrapper= styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;
`
export const TopLine= styled.p`
color:${({lightText})=>(lightText ? "#fafafa" :"#010606")};
font-size:16px;
line-height:16px;
font-weight:600;
letter-spacing:1.4px;
text-transform:uppercase;
margin-bottom:16px;
`

export const Heading = styled.h1`
margin-bottom:24px;
font-size:48px;
line-height:1.1;
font-weight:600;
color:${({lightText})=>(lightText ? "#fafa10" :"#010606")};

@media screen and (max-width:480px){
    font-size:32px;
}
`

export const Social= styled.div`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
display:flex;
justify-content:space-around;
color: ${({darkText})=>( darkText ? "#010606" : "#fafafa" )};
`
export const SocialItem= styled.a`
font-size:2.5rem;
color:${({dark})=>(dark ? "#000010" : "#fafafa")};
text-decoration:none;
cursor:pointer;
transition:all 0.15s ease-in-out;
&:hover{
    color:#fafa10;
   transform:scale(1.05);
    transition:all 0.15s ease-in-out;
}
`
export const ImgWrap=styled.div`
max-width:555px;
height:100%;
`

export const Img= styled.img`
width:100%;

margin:0 0 10px 0;
padding-right:0;
`