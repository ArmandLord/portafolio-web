import styled from 'styled-components'
import { Container } from '../../globalStyles'
import BackLogo from '../../assets/back.png'

export const ContainerBackground = styled.div`
      width: 100%;
      height: 800px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* background: linear-gradient(91.23deg, rgba(154, 154, 154, 0.69) -0.19%, rgba(10, 10, 10, 0.69) 99.81%); */

      /* background: rgb(172,94,226);
      background: radial-gradient(circle, rgba(172,94,226,1) 3%, rgba(55,33,129,1) 100%); */
      background: #120932;
  
  /* iPad */
    @media screen and (max-width: 770px){
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* background: linear-gradient(91.23deg, rgba(154, 154, 154, 0.69) -0.19%, rgba(10, 10, 10, 0.69) 99.81%); */
      background: #120932;
    }
  /* mobile */
    @media screen and (max-width: 420px){
      width: 100%;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* background: linear-gradient(91.23deg, rgba(154, 154, 154, 0.69) -0.19%, rgba(10, 10, 10, 0.69) 99.81%); */
      background: #120932;

    }
    
`

export const BackgroundContainer = styled(Container)`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 7rem;
    align-items: flex-start;
    flex-direction: column;
    background-position: center center;
    background-image: url(${BackLogo});
    background-size: cover;
    /* background-repeat: no-repeat; */
  
  .contenedor {
    /* background: red; */
    display: flex;
    width: 300px;
    height: 40px;
    color: #fff;
    font-size: 2rem;
    line-height: 40px;
    
    position: absolute;
    /* top: 0; */
    /* right: 0; */
    bottom: 45%;
    /* left: 0; */
    margin: auto; 
    overflow: hidden;
    /* @media screen and (max-width: 414px){
      background: red;
    } */

    @media screen and (max-width: 770px){
      bottom: 70%;
      font-size: 1.5rem;
    }
    
}

ul {
	list-style: none;
	padding-left: 10px;
	animation: cambiar 8s infinite;
}

ul, p {
	margin: 0;
}

@keyframes cambiar {
	
	0%{ margin-top: 0;}
	20%{ margin-top: 0;}
	
	25% {margin-top: -40px;}
	50% {margin-top: -40px;}
	
	55% {margin-top: -80px;}
	80% {margin-top: -80px;}
	
	
	
	100% {margin-top: 0;}
}

    @media screen and (max-width: 415px){
      padding-bottom: 1rem;
    }

    @media screen and (max-width: 770px){
      padding-bottom: 3rem;
    }
    ${Container}

`

export const Transition = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 320px;
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
    font-size: 2.5rem;
    b{
      font-size: 2.9rem;
      text-shadow: 0 1.36px 20.896px #ac5ee2;
      @media screen and (max-width: 770px){
        font-size: 1.9rem;
      }
    }
    @media screen and (max-width: 414px){
      font-size: 1.1rem;
    }
    @media screen and (max-width: 770px){
      font-size: 1.5rem;
    }
`
export const H2 = styled.p`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 100;
    @media screen and (max-width: 414px){
      font-size: .6rem;
    }
    @media screen and (max-width: 770px){
      font-size: 1rem;
    }
`

