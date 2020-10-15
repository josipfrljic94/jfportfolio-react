import React from 'react'
import { CloseIcon,SideBarContainer,Icon,SideBarContent,SideBarRoute,SideBarMenu,SideBtnWrap,SideBarLink } from './SideBarElements'

const Sidebar = ({isOpen,toggle}) => {

    return (
      <SideBarContainer isOpen={isOpen}>
          <Icon>
              <CloseIcon onClick={()=>{toggle()}}/>
          </Icon>
          <SideBarContent>
              <SideBarMenu>
              <SideBarLink onClick={()=>{toggle()}} to="/">
                      home
                  </SideBarLink>
                  <SideBarLink onClick={()=>{toggle()}} to="/about">
                      about
                  </SideBarLink>
                  <SideBarLink onClick={()=>{toggle()}} to="/services">
                      services
                  </SideBarLink>
                  <SideBarLink onClick={()=>{toggle()}} to="/contact">
                     contact
                  </SideBarLink>
              </SideBarMenu>
              <SideBtnWrap>
                  <SideBarRoute onClick={()=>{toggle()}}>Sign up</SideBarRoute>
              </SideBtnWrap>
          </SideBarContent>
      </SideBarContainer>
    )
}

export default Sidebar;