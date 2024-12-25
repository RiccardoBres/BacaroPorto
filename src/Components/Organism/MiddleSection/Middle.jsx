import React from 'react';
import styled from 'styled-components';
import Slider from '../SectionIntro/Slider';

const Middle = ({ backgroundImage, showSlider }) => {
  return (
    <StyledMiddleContainer backgroundImage={backgroundImage}>
      <Overlay />
      <ContentWrapper>
        {showSlider && <Slider />}
      </ContentWrapper>
    </StyledMiddleContainer>
  );
};

export default Middle;

const StyledMiddleContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-attachment: fixed;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  color: white; 
`;

// Overlay trasparente
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 99;
`;

// Wrapper per i contenuti
const ContentWrapper = styled.div`
  z-index: 2;
`;
