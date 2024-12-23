import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp, FaArrowDown } from 'react-icons/fa';

const ScrollIndicator = ({ color = 'black' }) => {
  return (
    <StyledScrollContainer color={color}>
      <IconWrapper>
        <FaInstagram />
      </IconWrapper>
      <IconWrapper>
        <FaWhatsapp />
      </IconWrapper>
      <IconWrapper>
        <FaArrowDown />
      </IconWrapper>
    </StyledScrollContainer>
  );
};

export default ScrollIndicator;

// Styled Components
const StyledScrollContainer = styled.div`
  position: absolute;
  left: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 100;
  color: ${({ color }) => color};
  width: fit-content; 

  @media screen and (max-width: 479px) {
    left: 10px;
    gap: 3px;

  }
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
    @media screen and (max-width: 479px) {
      font-size: 1rem;


  }
`;
