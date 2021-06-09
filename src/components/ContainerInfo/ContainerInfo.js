import React from 'react'
import { LogoInfo, ContainerBackground, Info , ContainerText } from './ContainerInfo.element'

const ContainerInfo = () => {
    return (
        <>
           <ContainerBackground>
               <Info>
                <LogoInfo/>
                <ContainerText>
                My story as a programmer begins during the period of the pandemic that we have suffered throughout the world. At that time I finished my degree in Psychology at the National Autonomous University of Mexico. However, with all the changes that this pandemic brought, I realized that I had to deconstruct all my ideas and dreams about the future.
                <br/><br/>
                Thanks to a friend JossDz 💎 began to know the world of programming and how indispensable our time is. I realized the great opportunities to collaborate with teams to create innovative things and how beautiful the community is. Always supporting you to continue growing.
                <br/><br/>
                Currently, he continues researching new technologies and delving deeper into the programming languages, frameworks, and libraries that I know. I feel very motivated and excited to continue growing in this world.
                </ContainerText>
               </Info>
           </ContainerBackground>
        </>
    )
}

export default ContainerInfo
