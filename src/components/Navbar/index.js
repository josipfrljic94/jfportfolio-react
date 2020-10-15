import React from 'react';
import { RiMenu5Fill } from 'react-icons/ri';
import {Nav,NavbarContainer,NavLogo,
MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from "./NavbarElements";

const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">NJonjo</NavLogo>
                    <MobileIcon>
                       <RiMenu5Fill onClick={()=>toggle()}/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/about">
                                About
                            </NavLinks>
                        
                        </NavItem>
                        <NavItem>
                        <NavLinks to="/contact">
                                Contact
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about">
                                Services
                            </NavLinks>
                        
                        </NavItem>
                      
                    </NavMenu>
                    <NavBtn>
                           <NavBtnLink>
                               Sign-up
                           </NavBtnLink>
                       </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar;