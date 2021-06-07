
import { 
    OutlineCard,
    Image,
    H3,
    InfoCard,
    ContainerButton,
    ButtonInfo,
    ButtonInfoG,
    P
 } from './Card.element'

const Card = ({ src, title, text, to, href }) => {
    return (
        <>
            <OutlineCard>
                <Image src={src} alt={title}/>
                <InfoCard>
                    <H3>{title}</H3>         
                    <P>{text}</P>
                    <ContainerButton>
                        <ButtonInfoG href={href} target='blank'>GitHub</ButtonInfoG>
                        <ButtonInfo to={to}>👀</ButtonInfo>
                    </ContainerButton>
                </InfoCard>
            </OutlineCard>
        </>
    )
}

export default Card
