import React, { useEffect } from 'react';
import Nav from '../Components/Organism/Navbar/Nav';
import GlobalStyle from '../Layout/GlobalStyle';
import HeroSection from '../Components/Organism/Hero/HeroSection';
import Intro from '../Components/Organism/SectionIntro/Intro';
import Middle from '../Components/Organism/MiddleSection/Middle';
import MiddleIntro from '../Components/Organism/MiddleSection/MiddleIntro';
import Footer from '../Components/Organism/Footer/Footer';


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <GlobalStyle />
      <Nav />
      <HeroSection />
      <Intro />
      <Middle />
      <MiddleIntro />
      <Footer/>
    </>
  )
}

export default Home;
