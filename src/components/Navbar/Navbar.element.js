import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'
import {
    TiChevronLeft, 
    TiChevronRight
} from 'react-icons/ti'

export const Nav = styled.div`
    background-color: #000000;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 60px;

    ${Container}
`

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    &:hover{
        /*  Buscar más!! filter: blur(1px); */
    }
`

export const NavIconLeft = styled(TiChevronLeft)`
    margin-right: 0;
`

export const NavIconRight = styled(TiChevronRight)`
    margin-right: 0;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.3rem; 
        cursor: pointer;

    }  
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 55px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #000000
    }
`

export const NavItem = styled.li`
    height: 55px;
    border-bottom: 2px solid transparent; 
    

    &:hover{
        border-bottom: 2px solid #fff;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        margin-top: 80px;

        &:hover{
            border: none;

        }
    }
`

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        text-transform: uppercase;
        padding: 2rem;
        width: 100%;
        display: table;
        
        &:hover{
            font-size: 1.2rem;
            transition: all .1s ease;
        }
    }
 `

 export const NavHr = styled.hr`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        background-color: #000000;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        border: 0;
        height: 1px;
        width: 100px;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));

    }
 `