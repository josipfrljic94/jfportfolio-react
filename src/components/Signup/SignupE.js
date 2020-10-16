import styled from "styled-components";

export const SignContainer= styled.div`
width:100%;
display:flex;
flex-direction:column;
background:#ffff10;
justify-content:center;
align-items:center;
`


export const SignForm= styled.form`

width:50%;
display:grid;
justify-items:center;
align-content:space-between;
align-items:center;
padding:50px 0;

@media screen and (max-width:768px){
    width:90%;
   
}
@media screen and (max-width:460px){
    width:95%;
   
}
`

export const SignItem= styled.div`

font-size:1.8rem;
width:80%;
height:80px;
text-align:center;
@media screen and (max-width:768px){
   font-size:1.5rem;
   
}
@media screen and (max-width:460px){
  font-size:1.5rem;
   
}

`
export const SignLabel= styled.label`
width:100%;

height:40px;
`
export const SignInput= styled.input`
border:none;
width:100%;
height:40px;
border-radius:9px;
&:hover{
    border:1px solid blue;
}
`
export const BtnWrapper= styled.div`
display:flex;
justify-content:center;
padding:5px 0;
`

