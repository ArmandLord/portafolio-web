import React from 'react'
import { GrLinkedin, GrFacebook } from 'react-icons/gr'
import { ContactLogo, ContainerSocial, Social } from './LogosContact.element'

const LogosContact = () => {
    return (
        <>
            <ContactLogo>  <h2>Redes</h2>
                <ContainerSocial>
                    <Social>
                        <a href="https://www.linkedin.com/in/jos%C3%A9-armando-p%C3%A9rez/" target="blank"><GrLinkedin/></a>
                    </Social>
                    <Social>
                        <a href="https://www.facebook.com/profile.php?id=100001808171383" target="blank"><GrFacebook/></a> 
                    </Social>
                </ContainerSocial>   
            </ContactLogo>
        </>
    )
}

export default LogosContact
