import React from 'react';
import{FooterContainer,FooterWrapper,FooterItem,FooterItemH1,FooterItemMenu,FooterLi} from "./FooterE";


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
               <FooterItem>
                   <FooterItemH1>Content</FooterItemH1>
                   <FooterItemMenu>
                       <FooterLi>Home</FooterLi>
                       <FooterLi>About</FooterLi>
                       <FooterLi>Contact</FooterLi>
                   </FooterItemMenu>
               </FooterItem>
               <FooterItem>
                   <FooterItemH1>Policy</FooterItemH1>
                   <FooterItemMenu>
                       <FooterLi>Licence</FooterLi>
                       <FooterLi>Policy</FooterLi>
                       <FooterLi>Contact</FooterLi>
                   </FooterItemMenu>
               </FooterItem>
               <FooterItem>
                   <FooterItemH1>Contacts</FooterItemH1>
                   <FooterItemMenu>
                       <FooterLi>Facebook</FooterLi>
                       <FooterLi>Linkedin</FooterLi>
                       <FooterLi>E-Mail</FooterLi>
                       <FooterLi>Github</FooterLi>
                   </FooterItemMenu>
               </FooterItem>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
