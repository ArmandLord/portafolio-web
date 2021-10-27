import { ContainerProjects, ProjectsMin, Carrusel, CarrouselDivs, CarrouselImage, CarrouselInfo, LinksInfo, Deploy, GithuB } from './ProjectSlider.element'
import { H2 } from '../Skills/Skills.element'
import GameStore from '../../assets/GameStore.png'
import GameZone from '../../assets/GameZone.png'
import Climapp from '../../assets/Climapp.png'

const ProjectSlider = () => {
    return (
        <ContainerProjects>
            <ProjectsMin>
                <H2>Proyectos</H2>
                <Carrusel>
                    <CarrouselDivs>
                        <CarrouselImage src={GameStore} alt='Ecommerce videojuegos retro'/>
                        <CarrouselInfo>
                            <LinksInfo>
                                <h2>GameStore</h2>
                                <small>Ecommerce de videojuegos retro. ¡Recuerda tu infancia visitándonos!</small>
                                <a target='_blank' rel="noreferrer" href='https://16-bit-gamestore.vercel.app/'>Deploy <Deploy/></a>
                                <a target='_blank' rel="noreferrer" href='https://github.com/2Davit/16Bit-GameStore'>GitHub <GithuB/></a>
                            </LinksInfo>
                        </CarrouselInfo>
                    </CarrouselDivs>
                    <CarrouselDivs>
                        <CarrouselImage src={GameZone} alt='App clima'/>
                        <CarrouselInfo>
                            <LinksInfo>
                                <h2>GameZone</h2>
                                <small>Catalogo de videojuegos. ¡Ven y encuentra cualquier videojuego! </small>
                                {/* <a target='_blank' href='https://boring-pare-833804.netlify.app/'>Deploy <Deploy/></a> */}
                                <a target='_blank' rel="noreferrer" href='https://github.com/ArmandLord/videogames-pi'>GitHub <GithuB/></a>
                            </LinksInfo>
                        </CarrouselInfo>
                    </CarrouselDivs>
                    <CarrouselDivs>
                        <CarrouselImage src={Climapp} alt='App clima'/>
                        <CarrouselInfo>
                            <LinksInfo>
                                <h2>ClimApp</h2>
                                <small>Aplicación que te permite  conocer información climática de diferentes partes del mundo!</small>
                                <a target='_blank' rel="noreferrer" href='https://boring-pare-833804.netlify.app/'>Deploy <Deploy/></a>
                                <a target='_blank' rel="noreferrer" href='https://github.com/ArmandLord/climapp'>GitHub <GithuB/></a>
                            </LinksInfo>
                        </CarrouselInfo>
                    </CarrouselDivs>                    
                </Carrusel>
            </ProjectsMin>
        </ContainerProjects>
    )
}

export default ProjectSlider
