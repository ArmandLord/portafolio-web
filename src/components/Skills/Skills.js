import { useState } from 'react'
import { ContainerSkills, H2, SkillsMin, /*Carousel, CarouselIcon,*/ ContainerCardsSkills, CardsSkills, CardsSkillsGreen, CardsSkillsRed, CardsSkillsRED, InfoIcons } from './Skills.element'
import { ImHtmlFive, ImNpm } from 'react-icons/im'
import { SiCss3, SiJavascript, SiReact, SiStyledComponents, SiRedux } from 'react-icons/si'
import { BsBootstrap } from 'react-icons/bs'
import { FaNodeJs, FaSass } from 'react-icons/fa'
import { AiOutlineAntDesign } from 'react-icons/ai'


const Skills = () => {
    const [info, setInfo] = useState(true)
    return (
        <>
           <ContainerSkills>
               <SkillsMin>
                  <H2>Habilidades  <ImNpm style={{fontSize: '.7rem'}}/></H2>
                  <ContainerCardsSkills>
                    <CardsSkills onClick={() => setInfo(!info)}>{info ? <ImHtmlFive /> : <InfoIcons>HTML</InfoIcons>}</CardsSkills>
                    <CardsSkills onClick={() => setInfo(!info)}>{info ? <SiCss3/> : <InfoIcons>CSS</InfoIcons>}</CardsSkills>
                    <CardsSkills onClick={() => setInfo(!info)}>{info ? <BsBootstrap/> : <InfoIcons>Bootstrap</InfoIcons>}</CardsSkills>
                    <CardsSkillsGreen onClick={() => setInfo(!info)}>{info ? <SiStyledComponents/> : <InfoIcons>StyledComp</InfoIcons>}</CardsSkillsGreen>
                    <CardsSkillsGreen onClick={() => setInfo(!info)}>{info ? <AiOutlineAntDesign/> : <InfoIcons>AntDesign</InfoIcons>}</CardsSkillsGreen>
                    <CardsSkillsGreen onClick={() => setInfo(!info)}>{info ? <FaSass/> : <InfoIcons>Sass</InfoIcons>}</CardsSkillsGreen>
                    <CardsSkillsRed onClick={() => setInfo(!info)}>{info ? <SiJavascript/> : <InfoIcons>Javascript</InfoIcons>}</CardsSkillsRed>
                    <CardsSkillsRed onClick={() => setInfo(!info)}>{info ? <FaNodeJs/> : <InfoIcons>NodeJs</InfoIcons>}</CardsSkillsRed>
                    <CardsSkillsRed onClick={() => setInfo(!info)}>{info ? <SiRedux/> : <InfoIcons>Redux</InfoIcons>}</CardsSkillsRed>
                    <CardsSkillsRED onClick={() => setInfo(!info)}>{info ? <SiReact/> : <InfoIcons>React</InfoIcons>}</CardsSkillsRED>

                  </ContainerCardsSkills>
                  {/* <Carousel>
                      <CarouselIcon><IconContext.Provider value={{color: 'red'}}><ImHtmlFive/></IconContext.Provider> </CarouselIcon>
                      <CarouselIcon><SiCss3/></CarouselIcon>
                      <CarouselIcon><SiJavascript/></CarouselIcon>
                      <CarouselIcon><SiReact/></CarouselIcon>
                      <CarouselIcon><FaNodeJs/></CarouselIcon>
                      <CarouselIcon><BsBootstrap/></CarouselIcon>
                      <CarouselIcon><AiOutlineAntDesign/></CarouselIcon>
                      <CarouselIcon><SiStyledComponents/></CarouselIcon>
                  </Carousel>  */}
               </SkillsMin>
           </ContainerSkills>
        </>
    )
}

export default Skills
