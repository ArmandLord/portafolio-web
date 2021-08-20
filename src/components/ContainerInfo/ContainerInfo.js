import React from 'react'
import { LogoInfo, ContainerBackground, Info , ContainerText } from './ContainerInfo.element'

const ContainerInfo = () => {
    return (
        <>
           <ContainerBackground>
               <Info>
                <LogoInfo/>
                <ContainerText>
                    <h3>¿Cómo decido ser programador? </h3>   
                    <br/>
                        A raíz de los estragos de la pandemia descubrí que las posibilidades de aprender, de trabajar y de relacionarse habían sido tan afectadas que era necesario un cambio. En esos momentos estaba finalizando la licenciatura de Psicología en la Facultad de Estudios Superiores Zaragoza UNAM, como todo comenzaba a ser remoto terminé con el 100% de crédito mucho antes de lo esperado. Claro que no quería quedarme de brazos cruzados, esperando que comenzara un diplomado en Psicología Criminal, el cual iba a cursar. Días después un buen amigo me ofreció la oportunidad de aprender con el desarrollo web, acepté y me di cuenta de todas las oportunidades que había.
                    <br/>
                    <br/>
                        A diferencia de lo difícil que fue para otras áreas adaptarse, esta seguía creciendo y siendo cada vez más requerida por todos. Así fue que después de estudiar con Carlos Correa continúe aprendiendo de forma autodidacta con cursos de platzi, udemy, youtube y actualmente en Henry.
                    <br/>
                    <br/>
                        Sé que este es el comienzo y estoy feliz de que así sea, porque me apasiona seguir aprendiendo y creando cosas que hace unos meses parecían inimaginables. 
                    <br/>
                    <br/>
                    <br/>
                    <h4 style={{textAlign: 'center', fontStyle: 'italic'}}>“Un viaje de mil millas comienza con un solo paso” <br/>-Lao Tse-</h4>
                    <br/>
                    <br/>
                    <small style={{color: 'rgba(255, 255,255, 0.8)'}}>Gracias a <a target='blanck' href='https://www.linkedin.com/in/jossdz/' style={{textDecoration: 'none'}}>Joss Dz</a> por despertarme el interés y a <a target='blanck' href='https://www.soyhenry.com/' style={{textDecoration: 'none'}}>Henry</a> por exigirme tanto.</small>
                </ContainerText>
               </Info>
           </ContainerBackground>
        </>
    )
}

export default ContainerInfo
