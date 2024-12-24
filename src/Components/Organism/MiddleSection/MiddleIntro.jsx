import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import Title from '../../Atoms/Title';
import Paragraph from '../../Atoms/Paragraph';
import ScrollIndicator from '../../Molecules/ScrollIndicator';

const MiddleIntro = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  const isParagraphInView = useInView(paragraphRef, { once: true });


  return (
    <StyledMiddleIntro>
      <ContainerIntro>
        <ScrollIndicator />
        
        <motion.h1
          className="title-intro position-relative"
          ref={titleRef}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Cic-chet-eri-a
        </motion.h1>

        <motion.h1
          className="title-final"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          //Eventi privati
        </motion.h1>

        <motion.div
          ref={paragraphRef}
          initial={{ y: 50, opacity: 0 }}
          animate={isParagraphInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="d-flex flex-column mt-1"
        >
          <Paragraph fontSize="1.3rem" color="var(--color-dark);">
            <strong>Bacaro Bonfim</strong> é o bar do bairro para os moradores de Bonfim e para todos os que procuram explorar diferentes culturas <strong>culinarias</strong>.
          </Paragraph>
          <Paragraph fontSize="1.2rem" color="var(--color-dark);">
            Bacaro Bonfim acolhe a cidade do Porto de todos os ângulos: a sua localização no coração do bairro permite abrir as portas à autenticidade do Bonfim, enquanto o ambiente acolhedor e envolvente reflete o espírito vibrante e comunitário deste histórico pedaço da cidade.
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Title className="title-final">Scopri</Title>
        </motion.div>
      </ContainerIntro>
    </StyledMiddleIntro>
  );
};

export default MiddleIntro;

const StyledMiddleIntro = styled.div`
  min-height: 100vh;
  background-color: var(--color-secondary);
  padding-bottom: 0rem;

  .title-intro {
    font-size: 3.5rem;
    color: var(--color-dark) !important;
  }

  .title-final {
    font-size: 2.5rem;
    color: var(--color-dark) !important;
    font-weight: bold !important;
    line-height: 1;
    margin: 0 0 1rem 0;
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (max-width: 479px) {
    padding-bottom: 3rem;
    min-height: auto;

    .title-intro {
      font-size: 2.5rem;
      margin: 0;
    }
      .title-final {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const ContainerIntro = styled.div`
  padding: 10% 10%;

  @media screen and (max-width: 479px) {
            padding-left: 40px;
        padding-right: 40px;
        padding-top: 40px;
        padding-bottom: 5rem;
        text-align: left;
  }
`;

const TitleIntro = styled(Title)`
  font-size: 4rem;
  color: var(--color-dark) !important;
  font-weight: bold !important;
  line-height: 1;

  @media screen and (max-width: 479px) {
    font-size: 2rem;
  }
`;
