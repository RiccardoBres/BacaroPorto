import React, { useEffect } from 'react';
import Nav from '../Components/Organism/Navbar/Nav';
import GlobalStyle from '../Layout/GlobalStyle';
import HeroSection from '../Components/Organism/Hero/HeroSection';
import Intro from '../Components/Organism/SectionIntro/Intro';
import Middle from '../Components/Organism/MiddleSection/Middle';
import MiddleIntro from '../Components/Organism/MiddleSection/MiddleIntro';
import Footer from '../Components/Organism/Footer/Footer';
import Dj from '../Layout/Assets/dj.jpg';
import Music from '../Layout/Assets/music.jpg'; // Cambia questa immagine per un tema musicale


const MusicPage = () => {
  const paragraphs = [
    "Benvenuto nel cuore pulsante della musica live. La nostra location offre un'esperienza unica per gli amanti dei concerti, dove ogni nota suona forte come il battito di un cuore.",
    "Ogni sera è una nuova avventura musicale, con artisti locali e internazionali che portano sul palco energia, emozione e suoni che raccontano storie. Unisciti a noi per vivere la magia dei concerti dal vivo."
  ];

  const paragraphsMiddle = [
    "Scopri la nostra programmazione di eventi musicali, con concerti dal vivo che spaziano tra diversi generi musicali. Dalle band emergenti alle performance dei grandi nomi, ogni evento è un'opportunità unica per immergersi in una serata memorabile.",
    "Abbiamo creato uno spazio dove ogni performance è un'esperienza intima e coinvolgente, pensata per chi ama la musica dal vivo e l'energia del pubblico che vibra insieme."
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
        backgroundImage={Music}
        title='LIVE'
        smallText='CONCERTI'
        subtitle='AMBIENTE'
         />
      <Intro
        paragraphs={paragraphs}
        showCardsSection={false}
        title="La Scena Musicale"
        subtitle="//Eventi dal Vivo" />
      <Middle
        backgroundImage={Dj}
        showSlider={true} />
      <MiddleIntro
        mainTitle="Scopri i Concerti"
        subTitle="//Musica dal Vivo"
        finalTitle="Prenota il Tuo Posto"
        paragraphMiddle={paragraphsMiddle} />
      <Footer />
    </>
  )
}

export default MusicPage;
