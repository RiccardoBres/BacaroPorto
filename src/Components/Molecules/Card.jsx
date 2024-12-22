import React from 'react';
import styled from 'styled-components';

const Card = ({ image, title }) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <CardImage src={image} alt="Card image" />
      </ImageWrapper>
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

// Styled Components
const CardContainer = styled.div`
  width: 380px;
  height: 350px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;

  &:hover {
      filter: grayscale(20%); /* Applica il filtro bianco e nero */
      }
`;

const CardContent = styled.div`
      position: absolute;
    bottom: 0%;
    left: 0;
    right: 50%;
    padding: 10px;
    text-align: center;
    color: white;
    z-index: 10;

   
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  transition: transform 0.3s ease, font-size 0.3s ease;
text-decoration: underline;

  
  margin: 0;

  ${CardContainer}:hover & {
    transform: translateY(-10px);
    font-size: 2rem;
    

  }
`;
