import React from 'react';
import styled from 'styled-components';
import Ambiente from '../../../Layout/Assets/ambiente.jpg';
import Title from '../../Atoms/Title';
import Slider from '../SectionIntro/Slider';

const Middle = () => {
  return (
    <StyledMiddleContainer>
      <Overlay />
      <ContentWrapper>
        <Slider/>
      </ContentWrapper>
    </StyledMiddleContainer>
  );
};

export default Middle;

const StyledMiddleContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${Ambiente});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  color: white; /* Colore del testo */
`;

// Overlay trasparente
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Oscurisce l'immagine per migliorare leggibilità */
  z-index: 1;
`;

// Wrapper per i contenuti
const ContentWrapper = styled.div`
  padding: 10% 10%;

`;
