import styled from 'styled-components'
import { GiCutDiamond } from 'react-icons/gi'
import { Container } from '../../globalStyles'
import About from '../../assets/about.png'


export const ContainerBackground = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0a0424;
    padding-top: 3rem;
    padding-bottom: 3rem;
    @media screen and (max-width: 760px){
        height: auto;
    }
`

export const Info = styled(Container)`
    height: 100%;
    /* padding: 2.5em; */
    padding: 50px 0;
    display: flex;
    /* flex-flow: column wrap; */
    align-items: center;

    @media screen and (max-width: 760px){
        padding: 2em;
        margin: 0;
        flex-direction: column;
    }
    
    ${Container}
`

export const LogoInfo = styled(GiCutDiamond)`
    font-size: 1.6rem; 
    
`

export const ContainerText = styled.div`
    font-size: 15px;
    line-height: 28px;
    padding-top: 2em;
    /* padding-right: 50px;  */
    width: 50%;
    height: 100%;
    padding-left: 50px;
    /* margin: 0 100px; */
    text-align: justify;
    /* background: yellow; */

    @media screen and (max-width: 760px){
        margin: 0;
        font-size: 12px;
        padding: .5em;
        text-align: justify;
        width: 100%;
        height: auto;
    }
    a {
        color: rgba(255, 255,255, 0.8);
        &:hover{
            color: ${p => p.theme.color};
        }
    }
    h3{
        text-shadow: 0 1.36px 20.896px ${p => p.theme.color};
    }
    h4{
        text-shadow: 0 1.36px 20.896px ${p => p.theme.color};
    }
`
export const ContainerImageText = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center; 
    width: 50%;
    height: 100%;
    /* background: red; */
    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar{
        background: transparent;
        width: 3px;    
        height: 3px; 
    }

    &::-webkit-scrollbar-thumb {
        background:  #ac5ee2;
        border-radius: 4px;
    }
    /* background-position: center center;
    background-image: url(${About});
    background-size: auto;
    background-repeat: no-repeat; */
    
    /* img{
        
        height: 80%;
        object-fit: cover;
    } */
    @media screen and (max-width: 760px){
        margin: 0;
        font-size: 12px;
        padding: .5em;
        text-align: justify;
        width: 100%;
        height: auto;
    }
    a {
        color: rgba(255, 255,255, 0.8);
        &:hover{
            color: red;
        }
    }
`