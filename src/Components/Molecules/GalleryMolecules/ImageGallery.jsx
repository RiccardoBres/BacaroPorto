import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './gallery.css'

function useParallax(value, distance = "50vh") {
    return useTransform(value, [0, 1], [`-${distance}`, distance]);
}

const ease = [0.08, 0.37, 0.45, 0.89];

export function ImageGallery({ alt, imagePath, index, title }) {
    const [pulsing, setPulsing] = useState(true);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress);

    useEffect(() => {
        const pulseTimeout = setTimeout(() => setPulsing(false), 600);
        return () => clearTimeout(pulseTimeout);
    }, []);

    return (
        <motion.section ref={ref} className="carousel-section pt-5">
            <motion.div className="carousel-image-container">
                <div className={`${pulsing ? "pulse" : ""} loadable`}>
                    <LazyLoadImage
                        alt={alt}
                        width="100%"
                        height="auto"
                        loading="lazy"
                        src={typeof imagePath === 'string' ? imagePath : (() => {
                            console.error('Invalid imagePath:', imagePath);
                            return '';
                        })()}
                    />
                </div>
            </motion.div>
            <motion.h2
                className="carousel-title big-title"
                style={{ y }}
                initial={{ x: 100 }}
                animate={{ x: 0, transition: { delay: 0.5, duration: 1, ease } }}
            >{`#00${index + 1}` + ' ' + title}</motion.h2>
        </motion.section>
    );
}