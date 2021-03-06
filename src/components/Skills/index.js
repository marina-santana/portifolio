import React from 'react';
import { Container, List, ContainerList } from './styles';
import imgWaves from '../../assets/waves.png';
import imgFish from '../../assets/fish.png';
import imgFrontend from '../../assets/frontend.png';
import imgBackend from '../../assets/backend.png';
import imgMobile from '../../assets/mobile.png';
import { SubTitle, Title, TitleImage } from '../About/styles';

function Skills() {
    return (
        <Container>
            <Title>
                <TitleImage className="fish" src={imgFish} alt="peixe" />
                <SubTitle>
                    <h2>Habilidades</h2>
                    <img src={imgWaves} alt="ondas" />
                </SubTitle>
            </Title>
            <ContainerList>
                <List>
                    <img src={imgFrontend} alt="frontend" />
                    <h3>Frontend</h3>
                    <ul>
                        <li>Html</li>
                        <li>CSS</li>
                        <li>React</li>
                    </ul>
                </List>
                <List>
                    <img src={imgBackend} alt="backend" />
                    <h3>Backend</h3>
                    <ul>
                        <li>Node</li>
                        <li>Java</li>
                    </ul>
                </List>
                <List>
                    <img src={imgMobile} alt="mobile" />
                    <h3>Mobile</h3>
                    <ul>
                        <li>React native</li>
                    </ul>
                </List>
            </ContainerList>
        </Container>
    );
}

export default Skills;