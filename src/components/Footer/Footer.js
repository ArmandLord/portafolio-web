import React from 'react'
import { ContainerFooter, FooterMin, Icon, IconGitHub } from './Footer.elemet'
import { NavHr } from '../Navbar/Navbar.element'

const Footer = () => {
    return (
        <>
            <ContainerFooter>
                <FooterMin>
                    <NavHr/>
                    <Icon href='https://github.com/ArmandLord' target="blank">
                       <IconGitHub/> 
                    </Icon>
                    <NavHr/>
                </FooterMin>
            </ContainerFooter>
        </>
    )
}

export default Footer
