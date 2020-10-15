import styled from "styled-components";
import {MdKeyboardArrowRight} from "react-icons/md"
import {MdArrowForward} from "react-icons/md";

export const HeroContainer= styled.div`

height:85vh;
display:flex;
justify-content:center;
align-items:center;
padding:0 30px;
position:relative;
z-index:1;
&:after{
    content:"";
    position:absolute;
    background:#000;
    opacity:70%;
    width:100%;
    height:100%;
    top:0;
    left:0;
}
`

export const HeroBg= styled.div `
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
overflow:hidden;


`

export const VideoBg= styled.video `
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:green;
`

export const HeroContent= styled.div `
z-index:3;
max-width:80%;
position:absolute;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
export const HeroH1=styled.h1` 
font-family: 'Josefin Sans', sans-serif;
color:#fff;
font-size:5rem;
text-align:center;

@media screen and (max-width:980px){
    font-size:4rem;
}

@media screen and (max-width:768px){
    font-size:3rem;
}

@media screen and (max-width:480px){
    font-size:2rem;
}
`

export const HeroP= styled.p `
color:#fafa10;
font-size:3.5rem;
text-align:center;
-webkit-text-stroke-width:2px;
-webkit-text-stroke-color:#0a0a0a;
@media screen and (max-width:980px){
    font-size:3rem;
}
@media screen and (max-width:768px){
    font-size:2rem;
    -webkit-text-stroke-width:1px;
}

@media screen and (max-width:480px){
    font-size:1.5rem;
    -webkit-text-stroke-width:0.5px;
}
`
export const HeroBtnWrapper = styled.div`
margin-top:30px;
display:flex;
flex-direction:column;
align-items:center;
`
export const ArrowFoward= styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`

export const ArrowRight= styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px;
`