import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Formation from '../components/Formation';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SocialMedia from '../components/SocialMedia';
import { Body, Container } from './styles';

function Home() {
    return (
        <Container>
            <Header />
            <Body>
                <About />
                <Formation />
                <Skills />
                <Projects />
                <SocialMedia />
            </Body>
            <Footer />
        </Container>
    );
}

export default Home;