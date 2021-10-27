import styled from 'styled-components'
import { Container } from '../../globalStyles'
import { SiNetlify } from 'react-icons/si'
import { DiGithubAlt } from 'react-icons/di'


export const ContainerProjects = styled.div`
    height: 600px;
    /* height: auto; */
    width: 100%;
    background-color: #0a0424;
    
`

export const ProjectsMin = styled(Container)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    

    ${Container}
`
export const Carrusel = styled.div`
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    scroll-snap-type: x mandatory;
    overflow: scroll;
    overflow-y: hidden;
    margin-bottom: 3rem;
    
    &::-webkit-scrollbar{
        background: transparent;
        width: 3px;    
        height: 3px; 
    }

    &::-webkit-scrollbar-thumb {
        background:  ${p => p.theme.color};
        border-radius: 4px;
    }

`

export const CarrouselDivs = styled.div`
    scroll-snap-align: start;
    width: 100%;
    height: 90%;
    margin-left: 50px;
    display: flex;

    @media screen and (max-width: 770px){
        flex-direction: column;
        height: auto;
        align-items: center;
    }
`

export const CarrouselImage = styled.img`
    /* object-fit: cover; */
    object-fit: scale-down;
    margin: 0 auto;
    /* background: red; */
    width: 55%;
    height: 100%;
    @media screen and (max-width: 770px){
        width: 350px;
        /* height: 400px; */
    }
`
export const CarrouselInfo = styled.div`
    
    background-image: url(${ p => p.theme.backCoolProjects});
    background-position: center center;
    background-size: cover;
    width: 45%;
    height: 90%;
    @media screen and (max-width: 770px){
        width: 350px;
        /* height: 500px; */
    }
`
export const LinksInfo = styled.div`
   width: 50%;
   height: 100%; 
   padding: 1rem;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;

    h2{
        font-size: 1.7rem;
        text-shadow: 0 1.36px 20.896px ${p => p.theme.color};
        @media screen and (max-width: 770px){
            font-size: 1.2rem;
        }
    }
    small{
        text-align: justify;
        @media screen and (max-width: 770px){
            font-size: .7rem;
        }
    }
    a{
        font-size: 1rem;
        text-decoration: none;
        @media screen and (max-width: 770px){
            font-size: .8rem;
        }
    }
   
`
export const Deploy = styled(SiNetlify)`
    font-size: .9rem;
    @media screen and (max-width: 770px){
            font-size: .5rem;
        }
   
`
export const GithuB = styled(DiGithubAlt)`
    font-size: .9rem;
    @media screen and (max-width: 770px){
            font-size: .5rem;
        }
`