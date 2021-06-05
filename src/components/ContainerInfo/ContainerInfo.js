import React from 'react'
import { LogoInfo, ContainerBackground, Info , ContainerText } from './ContainerInfo.element'

const ContainerInfo = () => {
    return (
        <>
           <ContainerBackground>
               <Info>
                <LogoInfo/>
                <ContainerText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet malesuada suscipit. Vestibulum feugiat justo tortor, in bibendum odio tempor vel. Curabitur in nulla tortor. Vivamus vulputate dignissim nunc, sit amet eleifend quam fringilla non. Praesent tempus mi ut purus elementum, in rutrum sapien vehicula. Fusce tempor arcu et nulla pulvinar, sed finibus eros dapibus. Suspendisse egestas mi tincidunt tincidunt laoreet.
                <br/><br/>
                Donec lectus neque, dapibus non pulvinar et, convallis eu massa. Duis bibendum rhoncus vehicula. In vitae libero aliquam, faucibus est in, venenatis tortor. Aliquam pharetra pretium leo, quis lobortis ex placerat vel. Phasellus fermentum nulla eu urna venenatis, in accumsan diam mollis. Pellentesque sapien lorem, convallis efficitur laoreet in, rutrum a sem. Fusce auctor lorem magna, at fringilla augue lobortis sed.

                </ContainerText>
               </Info>
           </ContainerBackground>
          
        </>
    )
}

export default ContainerInfo
