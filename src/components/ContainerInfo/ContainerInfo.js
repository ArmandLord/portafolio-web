import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  LogoInfo,
  ContainerBackground,
  Info,
  ContainerText,
  ContainerImageText,
} from "./ContainerInfo.element";
import { FaUniversity, FaLaptopCode } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import { SiJavascript } from 'react-icons/si'
import { IoRocketSharp } from 'react-icons/io5'

const ContainerInfo = () => {
  return (
    <>
      <ContainerBackground>
        <Info>
          {/* <LogoInfo/> */}
          <ContainerImageText>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#120932",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #120932",
                }}
                date="&nbsp;&nbsp;&nbsp;2016- 2020"
                iconStyle={{ background: "#120932", color: "#fff" }}
                icon={<FaUniversity/>}
              >
                <h3 className="vertical-timeline-element-title">
                  Ingresé
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  UAMM/FES-Z
                </h4>
                <p>
                  Inicio mis estudios en Psicología
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: "#120932",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #120932",
                  }}
                date="2020&nbsp;&nbsp;&nbsp;"
                iconStyle={{ background: "#120932", color: "#fff" }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  Egreso
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Psicologo  
                </h4>
                <p>
                  Termino el 100% de mis creditos
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: "#120932",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #120932",
                  }}
                date="&nbsp;&nbsp;&nbsp;2020"
                iconStyle={{ background: "#120932", color: "#fff" }}
                icon={<SiJavascript />}
              >
                <h3 className="vertical-timeline-element-title">
                  Programación
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Emocionado  
                </h4>
                <p>
                  Comienza mi vida como programador: Hola mundo!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: "#120932",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #120932",
                  }}
                date="2021&nbsp;&nbsp;&nbsp;"
                iconStyle={{ background: "#120932", color: "#fff" }}
                icon={<FaLaptopCode />}
              >
                <h3 className="vertical-timeline-element-title">
                  Aceptado en Henry
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  #soyHenry  
                </h4>
                <p>
                  Inicio estudios para ser desarrollador Full Stack
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                iconStyle={{ background: "#120932", color: "#fff" }}
                icon={<IoRocketSharp />}
              />
            </VerticalTimeline>
          </ContainerImageText>
          <ContainerText>
            <h3>¿Cómo decido ser programador? </h3>
            <br />
            A raíz de los estragos de la pandemia descubrí que las posibilidades
            de aprender, de trabajar y de relacionarse habían sido tan afectadas
            que era necesario un cambio. En esos momentos estaba finalizando la
            licenciatura de Psicología en la Facultad de Estudios Superiores
            Zaragoza UNAM, como todo comenzaba a ser remoto terminé con el 100%
            de crédito mucho antes de lo esperado. Claro que no quería quedarme
            de brazos cruzados, esperando que comenzara un diplomado en
            Psicología Criminal, el cual iba a cursar. Días después un buen
            amigo me ofreció la oportunidad de aprender con el desarrollo web,
            acepté y me di cuenta de todas las oportunidades que había.
            <br />
            <br />
            A diferencia de lo difícil que fue para otras áreas adaptarse, esta
            seguía creciendo y siendo cada vez más requerida por todos. Así fue
            que después de estudiar con Carlos Correa continúe aprendiendo de
            forma autodidacta con cursos de platzi, udemy, youtube y actualmente
            en Henry.
            <br />
            <br />
            Sé que este es el comienzo y estoy feliz de que así sea, porque me
            apasiona seguir aprendiendo y creando cosas que hace unos meses
            parecían inimaginables.
            <br />
            <br />
            <br />
            <h4 style={{ textAlign: "center", fontStyle: "italic" }}>
              “Un viaje de mil millas comienza con un solo paso” <br />
              -Lao Tse-
            </h4>
            <br />
            <br />
            <small style={{ color: "rgba(255, 255,255, 0.8)" }}>
              Gracias a{" "}
              <a
                target="blanck"
                href="https://www.linkedin.com/in/jossdz/"
                style={{ textDecoration: "none" }}
              >
                Joss Dz
              </a>{" "}
              por despertarme el interés y a{" "}
              <a
                target="blanck"
                href="https://www.soyhenry.com/"
                style={{ textDecoration: "none" }}
              >
                Henry
              </a>{" "}
              por exigirme tanto.
            </small>
          </ContainerText>
        </Info>
      </ContainerBackground>
    </>
  );
};

export default ContainerInfo;
