import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import Title from '../../Atoms/Title';
import Paragraph from '../../Atoms/Paragraph';
import ScrollIndicator from '../../Molecules/ScrollIndicator';
import CardsSection from './CardsSection';

const Intro = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isSubtitleInView = useInView(subtitleRef, { once: true });
  const isParagraphInView = useInView(paragraphRef, { once: true });

  return (
    <StyledIntro>
      <ContainerIntro>
        <ScrollIndicator color="var(--color-dark)" />

        <motion.div
          ref={titleRef}
          initial={{ y: 50, opacity: 0 }}
          animate={isTitleInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <TitleIntro className="title-intro position-relative">
            Ba-ca-ro
          </TitleIntro>
        </motion.div>

        <motion.div
          ref={subtitleRef}
          initial={{ y: 50, opacity: 0 }}
          animate={isSubtitleInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Title fontSize="2rem" color="var(--color-dark)" className="title-final">
            //Brunch Bistrot 
          </Title>
        </motion.div>

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

        <CardsSection />
      </ContainerIntro>
    </StyledIntro>
  );
};

export default Intro;

const StyledIntro = styled.div`
  min-height: 100vh;
  background-color: var(--color-secondary);
  padding-bottom: 0rem;
`;

const ContainerIntro = styled.div`
  padding: 10% 10%;
  .title-final {
      text-decoration: underline;
    }

  @media screen and (max-width: 479px) {
    p {
      font-size: 1rem;
    }

    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 5rem;
    text-align: left;

    .title-intro {
      font-size: 2.5rem;
      margin: 0;
    }
      .title-final {
      font-size: 1.2rem;
    }
      
  }
`;

const TitleIntro = styled(motion.h1)`
  font-size: 4rem;
  color: var(--color-dark) !important;
  font-weight: bold !important;
  line-height: 1;

  @media screen and (max-width: 479px) {
    font-size: 2rem;
  }
`;
