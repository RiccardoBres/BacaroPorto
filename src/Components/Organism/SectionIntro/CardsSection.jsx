import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'; // Importa i componenti di Bootstrap
import Card from '../../Molecules/Card'; 
import Ambiente from '../../../Layout/Assets/ambiente1.jpg';  // Immagine 1
import Tradizione from '../../../Layout/Assets/Tradizione.jpg';  // Immagine 2
import Wine from '../../../Layout/Assets/wine.jpg';  // Immagine 3
import styled from 'styled-components';

const CardsSection = () => {
  const images = [
    { src: Ambiente, alt: 'Ambiente', title: 'Ambiente' },
    { src: Tradizione, alt: 'Cocktail', title: 'Cocktail' },
    { src: Wine, alt: 'Wine', title: 'Vino' }
  ];

  return (
    <StyledContainer fluid>
      <StyledRow>
        {images.map((image, index) => (
          <StyledCol key={index} xs={12} sm={6} md={4} lg={4}>
            <StyledCard image={image.src} title={image.title} />
          </StyledCol>
        ))}
      </StyledRow>
    </StyledContainer>
  );
};

export default CardsSection;

// Styled Components

const StyledContainer = styled(Container)`
  background-color: transparent; 
  margin-top: 5rem;
  padding: 0;
  @media (max-width: 576px) {
  }
`;

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  position: relative;
  background-color: transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Aggiunge transizione per l'effetto hover */

  &:hover {
    transform: translateY(-10px); /* Muove la card verso l'alto quando hover */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Aggiunge una leggera ombra */
  }

  @media (max-width: 576px) {
    width: 100%; /* Card occupa il 100% dello spazio disponibile */
  }
`;
