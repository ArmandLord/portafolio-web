import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const ProjectContent = styled.div`
    width: 100%;
    background: #000000;
    height: 100%;
`


export const ProjectContainer = styled(Container)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    
    ${Container}
`

export const ProjectTitle = styled.h2`
    margin: 2rem;
    display: flex;
    justify-content: center;
    
`

export const ProjectInfo = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 675px){
        height: 600px;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
     
`

export const ProjectText = styled.div`
    height: auto;
    width: 290px;
    text-align: justify;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProjectImage = styled.div`
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 100%;
        object-fit: cover;
        
    }
`