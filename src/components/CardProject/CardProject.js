import React from 'react'
import { FullCard, CardContainer } from './CardProject.element'
import { Card } from '../../components'

const CardProject = () => {
    return (
        <>
            <FullCard>
                <CardContainer>
                    <Card 
                        src="https://api.binary-coffee.dev/uploads/d196c5dabf39496c8c892f944d2102cf.jpg" 
                        title="Portafolio" 
                        text="hola soy yo, es todo mams kmkmk jniuniun sdg sdgd asfasfsd fsdfsdg fsd fsdfsf sfs fs dsdfs df sfs da dsfadfsd"
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
