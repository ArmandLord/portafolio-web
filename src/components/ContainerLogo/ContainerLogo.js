import React from 'react'
import { 
    ContainerBackground, 
    BackgroundContainer, 
    Transition,
    H1
} from './ContainerLogo.element'



const ContainerLogo = () => {
    return (
        <>
            <ContainerBackground>
                <BackgroundContainer>
                    <Transition>
                       <H1>
                         Armando Pérez  
                        </H1>
                    </Transition>
                </BackgroundContainer>
            </ContainerBackground>
        </>
    )
}

export default ContainerLogo
