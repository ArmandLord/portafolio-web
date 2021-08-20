import React, { useState } from 'react'
import { FaHamburger, FaTimes } from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIconLeft,
    NavIconRight,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavHr
 } from './Navbar.element'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <>
           <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIconLeft />
                            Armadev /
                        <NavIconRight />
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaHamburger/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                        <NavLinks to='/'>Home<NavHr/></NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to='/projects'>Proyectos<NavHr/></NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to='/contact'>Contacto<NavHr/></NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>   
           </Nav> 
        </>
    )
}

export default Navbar
