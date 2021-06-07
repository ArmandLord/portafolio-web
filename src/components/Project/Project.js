import React from 'react'
import { 
    ProjectContainer, 
    ProjectContent, 
    ProjectTitle, 
    ProjectInfo, 
    ProjectText, 
    ProjectImage 
} from './Project.element'

const Project = ({title}) => {
    return (
        <>
            <ProjectContent>
                <ProjectContainer>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectInfo>
                        <ProjectText>
                            <p>Curabitur sit amet nulla mi. Quisque ac tempor dolor. Nunc suscipit nunc vel elementum iaculis. Aliquam nunc dui, iaculis luctus justo sollicitudin, euismod blandit lorem. Proin eu ante vestibulum leo tincidunt rhoncus. Vestibulum in commodo metus. Proin velit est, malesuada mollis nisl a, eleifend ullamcorper nulla. Sed nec erat in velit auctor tristique a sit amet magna. Nunc eget elementum lacus, et iaculis mauris. Sed et hendrerit orci.</p>
                        </ProjectText>
                        <ProjectImage>
                            <img src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/03/14/5fa51e072fd4d.jpeg" alt=""></img>
                        </ProjectImage>
                    </ProjectInfo>
                    <ProjectInfo>
                        <ProjectText>
                            <p>Curabitur sit amet nulla mi. Quisque ac tempor dolor. Nunc suscipit nunc vel elementum iaculis. Aliquam nunc dui, iaculis luctus justo sollicitudin, euismod blandit lorem. Proin eu ante vestibulum leo tincidunt rhoncus. Vestibulum in commodo metus. Proin velit est, malesuada mollis nisl a, eleifend ullamcorper nulla. Sed nec erat in velit auctor tristique a sit amet magna. Nunc eget elementum lacus, et iaculis mauris. Sed et hendrerit orci.</p>
                        </ProjectText>
                        <ProjectImage>
                            <img src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/03/14/5fa51e072fd4d.jpeg" alt=""></img>
                        </ProjectImage>
                    </ProjectInfo>
                    <ProjectInfo>
                        <ProjectText>
                            <p>Curabitur sit amet nulla mi. Quisque ac tempor dolor. Nunc suscipit nunc vel elementum iaculis. Aliquam nunc dui, iaculis luctus justo sollicitudin, euismod blandit lorem. Proin eu ante vestibulum leo tincidunt rhoncus. Vestibulum in commodo metus. Proin velit est, malesuada mollis nisl a, eleifend ullamcorper nulla. Sed nec erat in velit auctor tristique a sit amet magna. Nunc eget elementum lacus, et iaculis mauris. Sed et hendrerit orci.</p>
                        </ProjectText>
                        <ProjectImage>
                            <img src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/03/14/5fa51e072fd4d.jpeg" alt=""></img>
                        </ProjectImage>
                    </ProjectInfo>
                </ProjectContainer>
            </ProjectContent>   
        </>
    )
}

export default Project
