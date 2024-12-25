import React, { useEffect } from 'react';
import Nav from '../Components/Organism/Navbar/Nav';
import GlobalStyle from '../Layout/GlobalStyle';
import HeroSection from '../Components/Organism/Hero/HeroSection';
import Intro from '../Components/Organism/SectionIntro/Intro';
import Middle from '../Components/Organism/MiddleSection/Middle';
import MiddleIntro from '../Components/Organism/MiddleSection/MiddleIntro';
import Footer from '../Components/Organism/Footer/Footer';
import ArtistHero from '../Layout/Assets/artistHero.jpg';
import HeroImage from '../Layout/Assets/bacaro-hero.jpg';
import ArtistMiddle from '../Layout/Assets/artistMiddle.jpg';




const ArtistsPage = () => {
    const paragraphs = [
        "Questa è la pagina dedicata agli artisti contemporanei che hanno reso unico il nostro spazio. Esplora la loro arte, scopri i loro percorsi e lasciati ispirare dalle loro opere.",
        "Gli artisti presentati portano un pezzo di se stessi nelle loro creazioni, trasformando il nostro spazio in una galleria viva che celebra la diversità e l'espressione individuale. Ogni opera racconta una storia, ogni artista un viaggio."
      ];
      const paragraphsMiddle = [
        "In questo angolo dedicato agli artisti, vi invitiamo a scoprire le loro opere più recenti, partecipare ai nostri eventi esclusivi e immergervi nel processo creativo che anima ogni angolo di questa galleria.",
        "Ogni artista ha una voce unica, e il nostro obiettivo è dare loro una piattaforma per raccontare le loro storie attraverso l'arte, offrendo al pubblico un'esperienza che stimola la mente e il cuore."
      ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <GlobalStyle />
      <Nav />
      <HeroSection
        backgroundImage={ArtistHero}
        title='ARTE'
        subtitle='CULTURA'
        overlay={true}
        smallText='ESPLORAZIONE' />
      <Intro
        paragraphs={paragraphs}
        showCardsSection={false}
        title="La Galleria"
        subtitle="//Esplora le opere" />
      <Middle
        backgroundImage={ArtistMiddle}
        showSlider={true} />
      <MiddleIntro
        mainTitle="Eventi Artistici"
        subTitle="//Mostre e performance"
        finalTitle="Scopri gli Artisti"
        paragraphMiddle={paragraphsMiddle} />
      <Footer />
    </>
  )
}

export default ArtistsPage;
