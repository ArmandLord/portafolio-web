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
    NavHr,
    NavItemBtn,
    NavItemBtnIcon1
 } from './Navbar.element'

const Navbar = ({ setTheme, theme }) => {
    const [click, setClick] = useState(false)
    const [logo, setLogo] = useState(true)

    const handleClick = () => setClick(!click)

    return (
        <>
           <Nav>
                <NavbarContainer>
                    {logo ?
                        <NavLogo to='/' onMouseOver={() => setLogo(!logo)} onMouseOut={() => setLogo(true)}>
                            <NavIconLeft />
                                App /
                            <NavIconRight />
                        </NavLogo> : 
                        <NavLogo to='/' onMouseOver={() => setLogo(!logo)} onMouseOut={() => setLogo(true)} >
                             Armando Pérez Pérez
                        </NavLogo>
                        }
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaHamburger/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home<NavHr/></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/contact'>Contacto<NavHr/></NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='/projects'>Proyectos<NavHr/></NavLinks>
                        </NavItem> */}
                        <NavItemBtn onClick={() => setTheme(!theme) }><NavItemBtnIcon1/></NavItemBtn>
                    </NavMenu>
                </NavbarContainer>   
           </Nav> 
        </>
    )
}

export default Navbar
