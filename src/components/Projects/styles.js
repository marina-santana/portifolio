import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p{
    max-width: 600px;
    text-align: center;
    margin-top: 8px;
  }

  .seaweed {
    width: 100px;
    height: 120px;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  width: 850px;
  justify-content: space-between;
  margin-top: 16px;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  a{
    position: absolute;
    margin-top: 140px;
    text-transform: uppercase;
  }
`;






