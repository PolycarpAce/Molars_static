import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarRoute } from './SidebarElements';
const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
        <CloseIcon />
        </Icon>
        <SidebarWrapper>
        <sidebarMenu>
        <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
        <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
        <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
        <SidebarLink to='apointment' onClick={toggle}>Apointment</SidebarLink>
        </sidebarMenu>
        <SideBtnWarp>
        <SidebarRoute to='/singin'>Sign In</SidebarRoute>
        </SideBtnWarp>
        </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
