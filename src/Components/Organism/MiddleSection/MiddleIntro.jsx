import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import Title from '../../Atoms/Title';
import Paragraph from '../../Atoms/Paragraph';
import ScrollIndicator from '../../Molecules/ScrollIndicator';

const MiddleIntro = ({ mainTitle, subTitle, paragraphMiddle, finalTitle }) => {


  const titleRef = useRef(null);
  const paragraphMiddleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  const isParagraphInView = useInView(paragraphMiddleRef, { once: true });

  return (
    <StyledMiddleIntro>
      <ContainerIntro>
        <ScrollIndicator />

        {mainTitle && (
          <motion.h1
            className="title-intro position-relative"
            ref={titleRef}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {mainTitle}
          </motion.h1>
        )}

        {subTitle && (
          <motion.h1
            className="title-final"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {subTitle}
          </motion.h1>
        )}

        <motion.div
          ref={paragraphMiddleRef}
          initial={{ y: 50, opacity: 0 }}
          animate={isParagraphInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="d-flex flex-column mt-1"
        >
          {paragraphMiddle.length > 0 ? paragraphMiddle.map((text, index) => (
            <Paragraph key={index} fontSize="1.5rem" color="var(--color-dark);">
              {text}
            </Paragraph>
          )): null}
        </motion.div>
       

        {finalTitle && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Title className="title-final">{finalTitle}</Title>
          </motion.div>
        )}

      </ContainerIntro>
    </StyledMiddleIntro>
  );
};

export default MiddleIntro;

const StyledMiddleIntro = styled.div`
  min-height: 60vh;
  background-color: var(--color-secondary);
  padding-bottom: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;

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
