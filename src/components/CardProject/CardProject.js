import React from 'react'
import { FullCard, CardContainer } from './CardProject.element'
import { Card } from '../../components'

const CardProject = () => {
    return (
        <>
            <FullCard>
                <CardContainer>
                    <Card 
                        src="Portfolio1.png" 
                        title="Portafolio" 
                        text="💼 Mi portafolio Web, diseñado en Figma, creado con la tecnología de React y Styled-Components 💅🏻."
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
