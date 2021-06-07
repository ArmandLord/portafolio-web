import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const ContactLogo = styled.div`
    background: #000000;
    width: 100%;
    height: 474px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 665px){
        height: auto;
    }
`
export const ContainerSocial = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-items: flex-start; 

    ${Container}
`
export const Social = styled.div`
    font-size: 5em;
    margin: 40px 0;
    cursor: pointer;
    &:hover{
        
        font-size: 4.8em;
    }
`