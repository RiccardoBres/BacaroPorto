import React from 'react';
import styled from 'styled-components';
import Title from '../../Atoms/Title';
import Paragraph from '../../Atoms/Paragraph';
import Hr from '../../Atoms/Hr';
import LogoFooter from '../../../Layout/Assets/Logo-removebg.png';
import Image from '../../Atoms/Image';

const Footer = () => {
    return (
        <StyledContainerFooter>
            <StyledImageLogoContainer>
                <Image src={LogoFooter} width="150px" />
                <StyledTitle fontSize="2.5rem">Porto</StyledTitle>
            </StyledImageLogoContainer>
            <StyledVerticalContainer>
                <StyledTitle fontSize="1.3rem" color="white" margin="0">
                    Rua Do Heroismo 91
                </StyledTitle>
                <StyledTitle fontSize="1.3rem" color="white" margin="0">
                    Bonfin 4000-025
                </StyledTitle>
                <StyledTitle fontSize="1.3rem" color="white" margin="0">
                    +351 913436264
                </StyledTitle>
                <StyledTitle fontSize="1.5rem" color="white" margin="0" className="my-3">
                    bacaroporto@gmail.com
                </StyledTitle>
                <StyledTitle fontSize="1.5rem" color="white" margin="0">
                    PT
                </StyledTitle>
            </StyledVerticalContainer>
            <StyledLinearContainer>
                <StyledFooterTitle fontSize="1.2rem">Copyright Bacaro SRL</StyledFooterTitle>
                <StyledFooterTitle fontSize="1.2rem">Nif 3027959544</StyledFooterTitle>
                <StyledFooterTitle fontSize="1.2rem">Privacy policy – Cookie Policy</StyledFooterTitle>
            </StyledLinearContainer>
        </StyledContainerFooter>
    );
};

export default Footer;

// Styled Components

const StyledImageLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

const StyledContainerFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--color-dark);
    padding: 2rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const StyledVerticalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    @media (max-width: 768px) {
        gap: 0.3rem;
    }
`;

const StyledLinearContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    gap: 5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
    }
`;

const StyledTitle = styled(Title)`
    margin-bottom: 0.2rem;
    text-align: center;
    color: white;
    font-weight: 400 !important;
    letter-spacing: 5px;

    @media (max-width: 768px) {
        font-size: 1rem;
        letter-spacing: 3px;
    }
`;

const StyledFooterTitle = styled(Title)`
    text-align: center;
    color: white;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;
