import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import Title from '../../Atoms/Title';


const HeroSection = ({ backgroundImage, title, subtitle, smallText, overlay }) => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: true });
    const isSubtitleInView = useInView(subtitleRef, { once: true });

    return (
        <StyledHero backgroundImage={backgroundImage}>
            {overlay && <Overlay />}
            
            <motion.div
                ref={titleRef}
                initial={{ y: 50, opacity: 0 }}
                animate={isTitleInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <StyledTitle className="oi-regular">
                    {title}
                </StyledTitle>
            </motion.div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isTitleInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Title fontSize="16px" margin="0" color='var(--color-secondary)'>
                    {smallText}
                </Title>
            </motion.div>

            <motion.div
                ref={subtitleRef}
                initial={{ y: 50, opacity: 0 }}
                animate={isSubtitleInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.8 }}
            >
                <StyledSubtitle>
                    {subtitle}
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
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  z-index: -1;
`;

// Componente per l'overlay
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);  /* Overlay semi-trasparente */
  z-index: -1;  
`;

const StyledTitle = styled(motion.h1)`
  font-size: 8.5rem;
  font-weight: 400 !important;
  font-style: normal;
  letter-spacing: 0px;
  margin: 0;

  line-height: normal;
  color: var(--color-secondary);
  z-index: 2;  
  
  @media screen and (max-width: 500px) {
    font-size: 3.5rem;
  }
`;

const StyledSubtitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 5px;
  color: var(--color-secondary);
  margin: 0;
  padding: 0;

  z-index: 2; 

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;
