import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import HeroImage from '../../../Layout/Assets/bacaro-hero.jpg';
import Title from '../../Atoms/Title';

const HeroSection = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: true });
    const isSubtitleInView = useInView(subtitleRef, { once: true });

    return (
        <StyledHero>
            <motion.div
                ref={titleRef}
                initial={{ y: 50, opacity: 0 }}
                animate={isTitleInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <StyledTitle className="oi-regular">
                    BACARO
                </StyledTitle>
            </motion.div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isTitleInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Title fontSize="16px" margin="0" color='var(--color-secondary)'>
                    CICCHETTERIA
                </Title>
            </motion.div>

            <motion.div
                ref={subtitleRef}
                initial={{ y: 50, opacity: 0 }}
                animate={isSubtitleInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.8 }}
            >
                <StyledSubtitle>
                    Porto
                </StyledSubtitle>
            </motion.div>
        </StyledHero>
    );
};

export default HeroSection;

const StyledHero = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Oi&display=swap');

  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  z-index: -1;
`;

const StyledTitle = styled(motion.h1)`
  font-size: 8.5rem;
  font-family: 'Oi', fantasy;
  font-weight: 400 !important;
  font-style: normal;
  letter-spacing: 0px;
  margin: 0;
  line-height: normal;
  color: var(--color-secondary);

  @media screen and (max-width: 500px) {
    font-size: 5.5rem;
  }
`;

const StyledSubtitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 10px;
    color: var(--color-secondary);
  margin: 0;
  padding: 0;
`;
