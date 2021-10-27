import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { ContainerLogo, ContainerInfo, Skills, ProjectSlider } from '../../components'


const Home = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <ContainerLogo/>
            <ContainerInfo/>
            <Skills/>
            <ProjectSlider/>
        </>
    )
}

export default Home
