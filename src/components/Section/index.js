import React from 'react';
import{FaFacebookSquare,
    FaLinkedin,
    FaGithubSquare} from "react-icons/fa";
import{RiMailFill } from "react-icons/ri";



import {SectionContainer,SectionWrapper,SectionRow,Column1,Column2,
    TextWrapper,TopLine,Heading,Social,SocialItem,ImgWrap,Img} from "./SectionE";

const Section = ({lightBg,id,imgStart,lightText,headLine,
    darkText,description,topLine,img,alt,dark}) => {
    return (
       <SectionContainer lightBg={lightBg} id={id}>
          <SectionWrapper>
              <SectionRow imgStart={imgStart}>
                  <Column1>
                    <TextWrapper>
                        <TopLine lightText={lightText}>
                        {topLine}
                        </TopLine>
                        <Heading  lightText={lightText}>
                            {headLine}
                        </Heading>
                        <Social darkText={darkText}>
                            <SocialItem dark={dark} href="https://www.facebook.com/josip.pop/"><FaFacebookSquare /></SocialItem>
                            <SocialItem  dark={dark} href="https://www.linkedin.com/in/josip-frlji%C4%87-65009719a/"><FaLinkedin/></SocialItem>
                            <SocialItem  dark={dark} href = "mailto: josipfrljic94@gmail.com"> <RiMailFill/></SocialItem>
                            <SocialItem  dark={dark} href="https://github.com/josipfrljic94"><FaGithubSquare/></SocialItem>
                     </Social>  
                      
                       
                    </TextWrapper>
                  </Column1>
                  <Column2>
                  <ImgWrap>
                  <Img src={img} alt={alt}/>
                  </ImgWrap>
                  </Column2>
              </SectionRow>
          </SectionWrapper>
       </SectionContainer>
    )
}

export default Section
