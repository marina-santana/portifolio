import React from 'react';
import { Container, List, ContainerList } from './styles';
import imgWaves from '../../assets/waves.png';
import imgOyster from '../../assets/oyster.png';
import imgDev from '../../assets/dev.png';
import imgLinkedin from '../../assets/linkedin.png';
import imgGitHub from '../../assets/github.png';
import { SubTitle, Title, TitleImage } from '../About/styles';

function SocialMedia() {
    return (
        <Container>
            <Title>
                <TitleImage className="oyster" src={imgOyster} alt="ostra" />
                <SubTitle>
                    <h2>Redes sociais</h2>
                    <img src={imgWaves} alt="ondas" />
                </SubTitle>
            </Title>
            <ContainerList>
                <List>
                    <img src={imgLinkedin} alt="linkedin" />
                    <a href="https://www.linkedin.com/in/marina-santa-ana/">marina-santa-ana</a>
                </List>
                <List>
                    <img src={imgGitHub} alt="git hub" />
                    <a href="https://github.com/marina-santana">marina-santana</a>
                </List>
                <List>
                    <img src={imgDev} alt="dev" />
                    <a href="https://dev.to/marinasantana">@marinasantana</a>
                </List>
            </ContainerList>
        </Container>
    );
}

export default SocialMedia;