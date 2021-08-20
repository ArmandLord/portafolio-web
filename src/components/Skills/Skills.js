import React from 'react'
import { ContainerSkills, H2, SkillsMin, Carousel, CarouselIcon } from './Skills.element'
import { ImHtmlFive } from 'react-icons/im'
import { SiCss3, SiJavascript, SiReact, SiStyledComponents } from 'react-icons/si'
import { BsBootstrap } from 'react-icons/bs'
import { FaNodeJs } from 'react-icons/fa'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const Skills = () => {
    return (
        <>
           <ContainerSkills>
               <SkillsMin>
                  <H2>Habilidades</H2>
                  <Carousel>
                      <CarouselIcon><IconContext.Provider value={{color: 'red'}}><ImHtmlFive/></IconContext.Provider> </CarouselIcon>
                      <CarouselIcon><SiCss3/></CarouselIcon>
                      <CarouselIcon><SiJavascript/></CarouselIcon>
                      <CarouselIcon><SiReact/></CarouselIcon>
                      <CarouselIcon><FaNodeJs/></CarouselIcon>
                      <CarouselIcon><BsBootstrap/></CarouselIcon>
                      <CarouselIcon><AiOutlineAntDesign/></CarouselIcon>
                      <CarouselIcon><SiStyledComponents/></CarouselIcon>
                  </Carousel> 
               </SkillsMin>
           </ContainerSkills>
        </>
    )
}

export default Skills
