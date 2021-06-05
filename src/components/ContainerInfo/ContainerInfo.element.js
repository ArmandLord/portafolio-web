import styled from 'styled-components'
import { GiCutDiamond } from 'react-icons/gi'
import { Container } from '../../globalStyles'


export const ContainerBackground = styled.div`
    background-color: #000000;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Info = styled(Container)`
    height: 100%;
    padding: 2em;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    
    ${Container}
`

export const LogoInfo = styled(GiCutDiamond)`
    font-size: 1.6rem; 
    
`

export const ContainerText = styled.div`
    font-size: 15px;
    line-height : 28px;
    padding: 2em;
    margin: 0 100px;
    text-align: justify;

    @media screen and (max-width: 760px){
        margin: 0;
        font-size: 12px;
        padding: 2em;
        text-align: justify;
    }
`