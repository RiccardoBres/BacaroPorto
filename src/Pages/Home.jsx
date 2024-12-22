import React, { useEffect } from 'react';
import Nav from '../Components/Organism/Navbar/Nav';
import GlobalStyle from '../Layout/GlobalStyle';
import HeroSection from '../Components/Organism/Hero/HeroSection';
import Intro from '../Components/Organism/SectionIntro/Intro';
import Middle from '../Components/Organism/MiddleSection/Middle';


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
    <GlobalStyle/>
    <Nav />
    <HeroSection/>
    <Intro/>
   <Middle/> 
    </>
  )
}

export default Home;
