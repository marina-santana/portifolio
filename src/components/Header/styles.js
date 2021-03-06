import styled from 'styled-components';
import imgHeader from '../../assets/header.png';
import imgMarina from '../../assets/marina.jpg';

export const Container = styled.header`
  background-image: url(${imgHeader});;
  background-size: 100%;
  margin-top: -5px;
  width: 100vw;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  align-items: center;
  max-width: 100%;

  h1{
    font-weight: 600;
    font-size: 3em;
    color: #AD9EFA;
    margin-top: 500px;
    text-align: center;
  }

  img + img {
    margin-top: 8px;
  }

  @media (max-width: 1000px){
    background-size: auto;
  }

  @media (max-width: 600px){
    width: auto;

    img{
      width: 90%;
    }
  }
`;

export const Image = styled.div`
  background-image: url(${imgMarina});;
  width: 300px;
  height: 300px;
  position: absolute;
  margin: auto;
  background-size: cover;
  object-fit: fill;
  border-radius: 50%;
  top: 180px;

  :after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    bottom: -10px;
    right: -10px;
    border-radius: 50%;
    border: 10px dashed #C1B6FB;
  }
`;



