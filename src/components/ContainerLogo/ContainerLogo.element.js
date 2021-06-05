import styled from 'styled-components'
import { Container } from '../../globalStyles'


export const ContainerBackground = styled.div`
      width: 100%;
      height: 450px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(91.23deg, rgba(154, 154, 154, 0.69) -0.19%, rgba(10, 10, 10, 0.69) 99.81%);
  
  /* iPad */
    @media screen and (max-width: 770px){
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(91.23deg, rgba(154, 154, 154, 0.69) -0.19%, rgba(10, 10, 10, 0.69) 99.81%);
    }
  /* mobile */
    @media screen and (max-width: 420px){
      width: 100%;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(91.23deg, rgba(154, 154, 154, 0.69) -0.19%, rgba(10, 10, 10, 0.69) 99.81%);

    }
    
`

export const BackgroundContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;

    ${Container}
`

export const Transition = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    background: #000000;
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape 5s linear infinite;
    z-index: -1;
    -webkit-animation: sliderShape 5s linear infinite;
    cursor: not-allowed;

@keyframes sliderShape{
  0%,100%{
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  34%{
      border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform:  translate3d(0,5px,0) rotateZ(0.01deg);
  }
  50%{
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  67%{
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60% ;
    transform: translate3d(0,-3px,0) rotateZ(0.01deg);
  }
}
  @media screen and (max-width: 770px){
    width: 200px;
    height: 200px;
  }
`

export const H1 = styled.h1`
    color: #fff;
    font-size: 36px;
    @media screen and (max-width: 770px){
      font-size: 25px;
    }
`