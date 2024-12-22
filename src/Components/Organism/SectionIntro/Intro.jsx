import React from 'react';
import styled from 'styled-components';
import Title from "../../Atoms/Title";
import Paragraph from '../../Atoms/Paragraph';
import Slider from './Slider';
import CardsSection from './CardsSection';

const Intro = () => {
  return (
    <StyledIntro>
      <ContainerIntro>
        <TitleIntro className='title-intro'>
          BacaroPorto
        </TitleIntro>
        <Title fontSize='2.5rem' color='var(--color-dark);'>
        //Brunch Bistrot Cocktail Bar
        </Title>
        <div className="d-flex flex-column mt-5">
        <Paragraph fontSize='1.5rem' color='var(--color-dark);'>
          Bacaro Bonfim é o bar do bairro para os moradores de Bonfim e para todos os que procuram explorar diferentes culturas.
        </Paragraph>
        <Paragraph fontSize='1.5rem' color='var(--color-dark);'>
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

`
const TitleIntro = styled(Title)`
    font-size: 4rem;
    color: var(--color-dark)!important;
    font-weight: bold!important;
    line-height: 1;
    margin: 0;
`

