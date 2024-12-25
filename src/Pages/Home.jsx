import React, { useEffect } from 'react';
import Nav from '../Components/Organism/Navbar/Nav';
import GlobalStyle from '../Layout/GlobalStyle';
import HeroSection from '../Components/Organism/Hero/HeroSection';
import Intro from '../Components/Organism/SectionIntro/Intro';
import Middle from '../Components/Organism/MiddleSection/Middle';
import MiddleIntro from '../Components/Organism/MiddleSection/MiddleIntro';
import Footer from '../Components/Organism/Footer/Footer';
import Ambiente from '../Layout/Assets/ambiente.jpg';
import HeroImage from '../Layout/Assets/bacaro-hero-black.jpg';



const Home = () => {
  const paragraphs = [
    "Bacaro Bonfim é o bar do bairro para os moradores de Bonfim e para todos os que procuram explorar diferentes culturas culinarias.",
    "Bacaro Bonfim acolhe a cidade do Porto de todos os ângulos: a sua localização no coração do bairro permite abrir as portas à autenticidade do Bonfim, enquanto o ambiente acolhedor e envolvente reflete o espírito vibrante e comunitário deste histórico pedaço da cidade."
  ];
  const paragraphsMiddle = [
    "<Bacaro Bonfim é o bar do bairro para os moradores de Bonfim e para todos os que procuram explorar diferentes culturas culinarias.",
    "Bacaro Bonfim acolhe a cidade do Porto de todos os ângulos: a sua localização no coração do bairro permite abrir as portas à autenticidade do Bonfim, enquanto o ambiente acolhedor e envolvente reflete o espírito vibrante e comunitário deste histórico pedaço da cidade."
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <GlobalStyle />
      <Nav />
      <HeroSection
        overlay={true}
        backgroundImage={HeroImage}
        title='BACARO'
        subtitle='PORTO'
        smallText='CICCHETTERIA' />
      <Intro
        paragraphs={paragraphs}
        showCardsSection={true}
        title="Ba-ca-ro"
        subtitle="//Brunch Bistrot" />
      <Middle
        backgroundImage={Ambiente}
        showSlider={true} />
      <MiddleIntro
        mainTitle="Cic-chet-eri-a"
        subTitle="//Eventi privati"
        finalTitle="Scopri Ora"
        paragraphMiddle={paragraphsMiddle} />
      <Footer />
    </>
  )
}

export default Home;
