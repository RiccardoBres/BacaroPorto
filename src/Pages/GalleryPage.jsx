import React, { useEffect } from 'react';
import Nav from '../Components/Organism/Navbar/Nav';
import { motion } from 'framer-motion';
import GlobalStyle from '../Layout/GlobalStyle';
import HeroSection from '../Components/Organism/Hero/HeroSection';
import Footer from '../Components/Organism/Footer/Footer';
import HeroImage from '../Layout/Assets/bacaro-hero-black.jpg';
import { Gallery } from '../Components/Molecules/GalleryMolecules/Galley';
import { Volume1Metadata } from '../Components/Molecules/GalleryMolecules/ImagesMetaData';




const GalleryPage = () => {


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
                title='GALLERY'
                subtitle='MODERNA'
                smallText='GASTRONOMIA' />
            <div className="container-carousel-section">
                <motion.article
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                    <Gallery
                        title="First Event Gallery"
                        titleWidth={8.2}
                        photos={Volume1Metadata}
                    />
                </motion.article>
            </div>
            <Footer />
        </>
    )
}

export default GalleryPage;
