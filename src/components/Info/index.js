import React from 'react'
import { Column2 } from './InfoE';
import {Button} from "../ButtonElement"
import {InfoContainer,InfoWrapper,InfoRow,Column1,
    TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ImgWrap,Img} from "./InfoE";

const Info = ({lightBg,id,imgStart,lightText,headLine,
    darkText,description,buttonLabel,topLine,img,alt,primary,dark}) => {
    return (
       <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                  <Column1>
                    <TextWrapper>
                        <TopLine lightText={lightText}>
                        {topLine}
                        </TopLine>
                        <Heading  lightText={lightText}>
                            {headLine}
                        </Heading>
                        <Subtitle darkText={darkText}>
                           {description}
                        </Subtitle>
                        <BtnWrap>
                        <Button primary={primary} dark={dark} to="contact">{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                  <ImgWrap>
                  <Img src={img} alt={alt}/>
                  </ImgWrap>
                  </Column2>
              </InfoRow>
          </InfoWrapper>
       </InfoContainer>
    )
}

export default Info
