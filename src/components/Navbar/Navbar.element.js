import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'
import {
    TiChevronLeft, 
    TiChevronRight
} from 'react-icons/ti'

export const Nav = styled.div`
      background: #120932;
    width: 100%;
    height: 60px;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavbarContainer = styled(Container)`
    display: flex;

    ${Container}
`

export const NavLogo = styled(Link)`
    color: #fff;
    /* justify-self: flex-start; */
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    width: 20%;
    
    @media screen and (max-width: 960px){
        font-size: .7rem;
    } 
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
    justify-content: flex-end;
    list-style: none;
    text-align: center;
    width: 80%;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 55px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: transparent;
        backdrop-filter: blur(8px);
    }
`

export const NavItem = styled.li`
    height: 55px;
    border-bottom: 2px solid transparent; 
    
    

    &:hover{
        border-bottom: 2px solid #ac5ee2;
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
    color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    /* padding: 0.5rem 0 0.5rem 2rem; */
    height: 100%;
    width: 7rem;

    &:hover{
        color: #ffffff;
    }

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
        background-color: #ac5ee2;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        border: 0;
        height: 1px;
        width: 100px;

    }
 `