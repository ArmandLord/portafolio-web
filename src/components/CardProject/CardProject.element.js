import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const FullCard = styled.div`
    width: 100%;
    background: linear-gradient(91.23deg, rgba(154, 154, 154, 0.69) -0.19%, rgba(10, 10, 10, 0.69) 99.81%);
    height: auto;  
`
export const CardContainer = styled(Container)`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;

    @media screen and (max-width: 1065px){
        grid-template-columns: auto auto;
    }

    @media screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    ${Container}
`