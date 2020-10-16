import React from 'react';
import { RiMenu5Fill } from 'react-icons/ri';
import {Nav,NavbarContainer,NavLogo,
MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from "./NavbarElements";
import { IoLogoSlack } from "react-icons/io";

const Navbar = ({toggle,scroll}) => {
    return (
        <div>
            <Nav scroll={scroll}>
                <NavbarContainer>
                    <NavLogo to="/"><IoLogoSlack/></NavLogo>
                    <MobileIcon onClick={()=>toggle()}>
                       <RiMenu5Fill />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">
                               Home
                            </NavLinks>
                        
                        </NavItem>
                       
                        <NavItem>
                            <NavLinks   to="/services">
                                Services
                            </NavLinks>
                        
                        </NavItem>
                        <NavItem>
                        <NavLinks to="/contact">
                                Contact
                            </NavLinks>
                        </NavItem>
                      
                    </NavMenu>
                    <NavBtn>
                           <NavBtnLink to="/contact">
                               Sign-up
                           </NavBtnLink>
                       </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar;