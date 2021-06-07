import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const OutlineCard = styled.div`
    background: #000000;
    border-radius: 2px;
    display: inline-block;
    height: 450px;
    margin: 1.5rem;
    width: 300px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    display: flex;
    flex-direction: column;
    

    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.35), 0 10px 10px rgba(0,0,0,0.22);
    }
`
export const Image = styled.img`
    /* {props => props.src } */
    width: 100%;
    height: 60%;
    background: white;
`

export const H3 = styled.h3`
    text-align: start;
    font-size: 16px;
    padding-left: 1rem;
`

export const InfoCard = styled.div`
    width: 100%;
    height: 40%;
    text-align: center;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`
export const P = styled.p`
    font-size: 10px;
    text-align: justify;
    padding: 0 18px;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-around;
   
`

export const ButtonInfo = styled(Link)`
    width: 40%;
    height: 3em;
    color: #fff;
    background: transparent;
    margin-top: 10px;
    border-radius: 5px;
    border: 2px solid #fff;
    transition: all .2s linear;
    padding: 3px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        box-shadow: 0 0 20px #fff, 0 0 30px #fff inset;
        background: #fff;
        color: #000000;
        font-weight: bold; 
    }
    &:focus{
        background: #000000;
        color: #fff;
        box-shadow: 0 0 5px #fff, 0 0 10px #fff inset;
    }
`
export const ButtonInfoG = styled.a`
    width: 40%;
    height: 3em;
    color: #fff;
    background: transparent;
    margin-top: 10px;
    border-radius: 5px;
    border: 2px solid #fff;
    transition: all .2s linear;
    padding: 3px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        box-shadow: 0 0 20px #fff, 0 0 30px #fff inset;
        background: #fff;
        color: #000000;
        font-weight: bold; 
    }
    &:focus{
        background: #000000;
        color: #fff;
        box-shadow: 0 0 5px #fff, 0 0 10px #fff inset;
    }
`