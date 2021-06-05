import styled from 'styled-components'
import { Container } from '../../globalStyles'


export const ContainerSkills = styled.div`
    height: auto;
    width: 100%;
    background: linear-gradient(91.23deg, rgba(154, 154, 154, 0.69) -0.19%, rgba(10, 10, 10, 0.69) 99.81%);
`

export const SkillsMin = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.5em;

    ${Container}
`

export const H2 = styled.h2`
    color: #fff;
    font-size: 28px;
    margin-bottom: 22px;
    
`

export const Carousel = styled.div`
        width: 600px;
        height:130px;
        overflow-x: scroll;
        display: flex;
        flex-wrap: no-wrap;
    
    @media screen and (max-width: 800px){
        width: 320px;
        height: 105px;
        /* overflow-x: scroll; */
        display: flex;
        flex-wrap: no-wrap;
    }
`

export const CarouselIcon = styled.div`
    font-size: 4rem;
    margin: 0 20px;
    
    &:hover{
            /*  EDITAR font-size: 3.1rem; */
            font-size: 6rem;
            margin: 0 10px 0px;
            animation: gelatine .8s infinite;
            @keyframes gelatine {
                from, to { transform: scale(.8, .8); }
                25% { transform: scale(0.7, .81); }
                50% { transform: scale(.81, 0.7); }
                75% { transform: scale(0.75, .85); }
            }
        }

    @media screen and (max-width: 800px){
        font-size: 2.9rem;
        margin: 0 20px;
        
        &:hover{
            /*  EDITAR font-size: 3.1rem; */
            font-size: 4.8rem;
            margin: 0 10px 0px;
            animation: gelatine .8s infinite;
            @keyframes gelatine {
                from, to { transform: scale(.8, .8); }
                25% { transform: scale(0.7, .81); }
                50% { transform: scale(.81, 0.7); }
                75% { transform: scale(0.75, .85); }
            }
        }
    }
`