import React from "react";
import {
  ContainerBackground,
  BackgroundContainer,
  // Transition,
  H1,
//   H2,
} from "./ContainerLogo.element";

const ContainerLogo = () => {
  return (
    <>
      <ContainerBackground>
        <BackgroundContainer>
          <div className="contenedor">
            <p>Hola</p>
            <ul>
              <li>mundo!</li>
              <li>bienvenidos</li>
              <li>descubre</li>
            </ul>
          </div>
          <H1>portafolio <b>Armandev</b></H1>
          {/* <Transition>
                       <H1>
                         Armando Pérez  
                        </H1>
                    </Transition> */}
        </BackgroundContainer>
      </ContainerBackground>
    </>
  );
};

export default ContainerLogo;
