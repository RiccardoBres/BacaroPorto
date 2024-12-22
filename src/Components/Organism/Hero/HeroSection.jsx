import styled from 'styled-components';
import HeroImage from '../../../Layout/Assets/bacaro-hero.jpg'; 
import Title from '../../Atoms/Title';


const HeroSection = () => {
    return (
        <StyledHero>
            <StyledTitle className='oi-regular'>
                BACARO
            </StyledTitle>
            <Title fontSize='16px' margin='0'>
                CICCHETTERIA
            </Title>
            <StyledSubtitle>
                Porto
            </StyledSubtitle>
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

const StyledTitle = styled(Title)`
    font-size: 8.5rem;
   font-family: "Oi", fantasy;
  font-weight: 400!important;
  font-style: normal;
          letter-spacing: 0px;
          margin: 0;
    line-height: normal;
`;

const StyledSubtitle = styled(Title)`
    font-size: 2.5rem;
    text-align: center; 
        letter-spacing: 10px;
    margin: 0;
    padding: 0;
`;
