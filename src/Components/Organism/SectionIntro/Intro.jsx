import React from 'react';
import styled from 'styled-components';
import Title from "../../Atoms/Title";
import Paragraph from '../../Atoms/Paragraph';
import ScrollIndicator from '../../Molecules/ScrollIndicator';
import CardsSection from './CardsSection';

const Intro = () => {
  return (
    <StyledIntro>
      <ContainerIntro>
      <ScrollIndicator color='var(--color-dark)'/>
        <TitleIntro className='title-intro position-relative'>
          BacaroPorto
        </TitleIntro>
        <Title fontSize='2.5rem' color='var(--color-dark)' className='title-intro'>
        //Brunch Bistrot Cocktail Bar
        </Title>
        <div className="d-flex flex-column mt-5">
        <Paragraph fontSize='1.5rem' color='var(--color-dark);'>
         <strong>Bacaro Bonfim</strong> é o bar do bairro para os moradores de Bonfim e para todos os que procuram explorar diferentes culturas <strong>culinarias</strong>.
        </Paragraph>
        <Paragraph fontSize='1.4rem' color='var(--color-dark);'>
          Bacaro Bonfim acolhe a cidade do Porto de todos os ângulos: a sua localização no coração do bairro permite abrir as portas à autenticidade do Bonfim, enquanto o ambiente acolhedor e envolvente reflete o espírito vibrante e comunitário deste histórico pedaço da cidade.
        </Paragraph>
        </div>
        <CardsSection/>
      </ContainerIntro>
    </StyledIntro>

  )
}

export default Intro

const StyledIntro = styled.div`
  min-height: 100vh;
  background-color: var(--color-secondary);
  padding-bottom: 0rem;

`
const ContainerIntro = styled.div`
  padding: 10% 10%;

  @media screen and (max-width: 479px) {
     p{
     font-size: 1rem;
     }
  }

  
  @media screen and (max-width: 479px) {
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 40px;
      padding-bottom: 5rem;
      .title-intro{
        font-size: 2rem;
  }
      
  }

`
const TitleIntro = styled(Title)`
    font-size: 4rem;
    color: var(--color-dark)!important;
    font-weight: bold!important;
    line-height: 1;
    margin: 0;

     @media screen and (max-width: 479px) {
      font-size: 2rem;

  }
`

