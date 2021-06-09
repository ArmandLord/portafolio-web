import React from 'react'
import { GrLinkedin, GrFacebook } from 'react-icons/gr'
import { ContactLogo, ContainerSocial, Social } from './LogosContact.element'

const LogosContact = () => {
    return (
        <>
            <ContactLogo>  <h2>Social Networks</h2>
                <ContainerSocial>
                    <Social>
                        <a href="https://www.linkedin.com/in/armando-perez-5a498a213/" target="blank"><GrLinkedin/></a>
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
