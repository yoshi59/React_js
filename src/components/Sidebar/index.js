import React from 'react'
import {SidebarContainer, Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizza</SidebarLink>
        <SidebarLink to="/">Dessart</SidebarLink>
        <SidebarLink to="/">fulit</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar