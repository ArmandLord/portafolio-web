import { ThemeProvider } from 'styled-components'
import BackLogo from './assets/back.png'
import BackLogo2 from './assets/back2.png'
import CarruselImage from './assets/carrusel.png'
import CarruselImage2 from './assets/carrusel2.png'

const themes = {
    original: {
        color: '#ac5ee2',
        colorSkillsBlue: 'rgb(70, 183, 272)',
        colorSkillsGreen: '#20aa0d',
        colorSkillsPurple: '#ac5ee2',
        colorSkillsRed: 'red',
        backCool: `${BackLogo}`,
        backCoolProjects: `${CarruselImage}`,
    },
    diaDeMuertos: {
        color: '#FF8000',
        colorSkillsBlue: '#FF8000',
        colorSkillsGreen: '#FF8000',
        colorSkillsPurple: '#FF8000',
        colorSkillsRed: '#FF8000',
        backCool: `${BackLogo2}`,
        backCoolProjects: `${CarruselImage2}`,
    }
}

export const Theme = ({children, propTheme}) => {
    return (
        <ThemeProvider theme={themes[propTheme]}>
            { children }
        </ThemeProvider>
    )
}