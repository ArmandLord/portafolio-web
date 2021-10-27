import React from 'react'
import { ContainerFooter, FooterMin, Icon, IconLink, IconGitHub, ContainerIcons, IconInstagram, IconLinkedIn, IconEmail } from './Footer.elemet'



const Footer = () => {
    return (
        <>
            <ContainerFooter>
                <FooterMin>
                    
                    <h2>Contactame</h2>
                    <ContainerIcons>    
                        <Icon rel="noreferrer" href='https://github.com/ArmandLord' target="blank">
                            <IconGitHub/> 
                        </Icon>
                        <Icon rel="noreferrer" href='https://www.linkedin.com/in/jos%C3%A9-armando-p%C3%A9rez/' target="blank">
                            <IconLinkedIn/> 
                        </Icon>
                        <IconLink to='/contact'>
                            <IconEmail/> 
                        </IconLink>
                        <Icon rel="noreferrer" href='https://www.instagram.com/armand_lord/?hl=es' target="blank">
                            <IconInstagram/> 
                        </Icon>
                    </ContainerIcons>   

                    <small>Copyright © 2021 Armandev. Diseño by Armando Pérez</small>
                </FooterMin>
            </ContainerFooter>
        </>
    )
}

export default Footer
