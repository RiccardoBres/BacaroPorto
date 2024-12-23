import React from 'react';
import styled from 'styled-components';
import Title from "../../Atoms/Title";
import Paragraph from '../../Atoms/Paragraph';
import ScrollIndicator from '../../Molecules/ScrollIndicator';

const MiddleIntro = () => {
  return (
    <StyledMiddleIntro>
      <ContainerIntro>
       <ScrollIndicator/> 
        <TitleIntro className='title-intro position-relative'>
          Cic-chet-eri-a
        </TitleIntro>
        <TitleIntro fontSize='2.5rem' color='var(--color-dark);'>
        //Eventi privati
        </TitleIntro>
        <div className="d-flex flex-column mt-5">
        <Paragraph fontSize='1.5rem' color='var(--color-dark);'>
         <strong>Bacaro Bonfim</strong> é o bar do bairro para os moradores de Bonfim e para todos os que procuram explorar diferentes culturas <strong>culinarias</strong>.
        </Paragraph>
        <Paragraph fontSize='1.4rem' color='var(--color-dark);'>
          Bacaro Bonfim acolhe a cidade do Porto de todos os ângulos: a sua localização no coração do bairro permite abrir as portas à autenticidade do Bonfim, enquanto o ambiente acolhedor e envolvente reflete o espírito vibrante e comunitário deste histórico pedaço da cidade.
        </Paragraph>
        </div>
        <Title className='title-final'>
          Scopri
        </Title>
      </ContainerIntro>
    </StyledMiddleIntro>

  )
}

export default MiddleIntro

const StyledMiddleIntro = styled.div`
  min-height: 100vh;
  background-color: var(--color-secondary);
  padding-bottom: 0rem;

  .title-final{
    font-size: 2.5rem;
    color: var(--color-dark)!important;
    font-weight: bold!important;
    line-height: 1;
    margin: 0;
    text-decoration: underline;
    cursor: pointer;
    }

    @media screen and (max-width: 479px) {
      padding-bottom: 3rem;
      min-height: auto;

`
const ContainerIntro = styled.div`
  padding: 10% 10%;

  @media screen and (max-width: 479px) {
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 5rem;
      .title-intro{
        font-size: 2rem;
  }

  @media screen and (max-width: 479px) {
     p{
     font-size: 1rem;
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

