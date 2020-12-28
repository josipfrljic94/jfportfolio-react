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
    background:#0a0a0a;

    opacity:50%;
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

export const VideoBg= styled.img `
width:60%;
height:100%;
/* margin-left:20%; */
object-position:top;
-o-object-fit:cover;
object-fit:cover;

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
export const HeroH1=styled.h1 ` 
text-transform:capitalize;
color:#ffff10;
font-weight:800;
font-size:6rem;
text-align:center;
padding:0;
margin:0;
margin-left:20%;
@media screen and (max-width:980px){
font-size:5rem;
margin-left:0;
}
@media screen and (max-width:768px){
 font-size:4rem;
 margin-left:0;
 }

@media screen and (max-width:480px){
font-size:2.5rem; 
margin-left:0;
 }
`


export const HeroP= styled.p `
color:#d1d1d0;
font-size:2.5rem;
font-weight:700;
text-align:left;
text-transform:uppercase;
text-orientation:landspace;
padding:0;
margin:0;
margin-left:20%;

@media screen and (max-width:980px){
    font-size:2.5rem;
    margin-left:0%;
}
@media screen and (max-width:768px){
    font-size:1.5rem;
    margin-left:0%;
}

@media screen and (max-width:480px){
    font-size:1rem;
    margin-left:0%;
}
`
export const HeroBtnWrapper = styled.div`
margin-top:30px;
display:flex;
flex-direction:column;
align-items:center;
margin-left:20%;

@media screen and (max-width:980px){

    margin-left:0;
}
`
export const ArrowFoward= styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`

export const ArrowRight= styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px;
`