import styled from 'styled-components'
import { Container } from '../../globalStyles'
import { GoMarkGithub } from 'react-icons/go'


export const ContainerFooter = styled.footer`
    display: flex; 
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    background: #000000;
    position: absolute;
    
    
`

export const FooterMin = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    
    ${Container}
`

export const Icon = styled.a`

`

export const IconGitHub = styled(GoMarkGithub)`
    font-size: 1.5rem;
    &:hover{
        font-size: 1.7rem;
    }
`