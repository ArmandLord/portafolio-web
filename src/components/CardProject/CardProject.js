import React from 'react'
import { FullCard, CardContainer } from './CardProject.element'
import { Card } from '../../components'

const CardProject = () => {
    return (
        <>
            <FullCard>
                <CardContainer>
                    <Card 
                        src="Portfolio.png" 
                        title="Portfolio" 
                        text="💼 My web portfolio is designed in Figma, created with React and Styled-Components 💅🏻."
                        to='/portafolio'
                        href='https://github.com/ArmandLord/portafolio-web'
                        />
                    <Card 
                        src="https://viniles-acuario.com/wp-content/uploads/2016/11/diseador-trabajando-300x300.png" 
                        title="Loading..." 
                        text="loading.. loading.. loading.. loading.."
                        to='/'
                        />
                        <Card 
                        src="https://viniles-acuario.com/wp-content/uploads/2016/11/diseador-trabajando-300x300.png" 
                        title="Loading..." 
                        text="loading.. loading.. loading.. loading.."
                        to='/'
                        />
                        <Card 
                        src="https://viniles-acuario.com/wp-content/uploads/2016/11/diseador-trabajando-300x300.png" 
                        title="Loading..." 
                        text="loading.. loading.. loading.. loading.."
                        to='/'
                        />
                        <Card 
                        src="https://viniles-acuario.com/wp-content/uploads/2016/11/diseador-trabajando-300x300.png" 
                        title="Loading..." 
                        text="loading.. loading.. loading.. loading.."
                        to='/'
                        />
                        <Card 
                        src="https://viniles-acuario.com/wp-content/uploads/2016/11/diseador-trabajando-300x300.png" 
                        title="Loading..." 
                        text="loading.. loading.. loading.. loading.."
                        to='/'
                        />
                </CardContainer>
            </FullCard>
        </>
    )
}

export default CardProject
