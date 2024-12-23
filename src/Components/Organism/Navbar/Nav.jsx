import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavContent from '../../Molecules/NavbarMolecules/NavContent';

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <NavbarContainer isScrolled={isScrolled}>
            <NavContent />
        </NavbarContainer>
    );
};

export default Nav;

const NavbarContainer = styled.div`
    display: flex
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  background-color: ${({ isScrolled }) => (isScrolled ? 'var(--color-dark)' : 'transparent')};
    padding: ${({ isScrolled }) => (isScrolled ? '' : '1rem 2rem')};
    transition: background-color 0.3s ease,padding 0.3s, height 0.3s ease; /* Transizione fluida */

     @media (max-width: 768px) {
    }
`;
