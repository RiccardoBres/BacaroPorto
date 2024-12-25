import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Hr from '../../Atoms/Hr';
import Image from '../../Atoms/Image';
import Logo from '../../../Layout/Assets/Logo-removebg.png'
import Offcanvas from 'react-bootstrap/Offcanvas';

const OffCanvas = ({ show, onHide }) => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        onHide(); // Chiude l'offcanvas prima di navigare
        navigate(path);
    };

    return (
        <StyledOffcanvas show={show} onHide={onHide}>
            <StyledOffcanvasHeader closeButton/>
            <StyledOffcanvasBody>
                <NavList>
                    <NavItem onClick={() => navigateTo('/')}>Home</NavItem>
                    <NavItem onClick={() => navigateTo('/gallery')}>Menu</NavItem>
                    <NavItem onClick={() => navigateTo('/artists')}>Beyond the Artist</NavItem>
                    <NavItem onClick={() => navigateTo('/music')}>Beyond the Music</NavItem>
                </NavList>
                <Hr />
                <NavList>
                    <NavItem onClick={() => navigateTo('/help')}>Help & Info</NavItem>
                    <NavItem onClick={() => navigateTo('/getting-here')}>Getting Here</NavItem>
                </NavList>
                <Hr />
                <NavList>
                    <NavItem onClick={() => navigateTo('/contact-us')}>Contact Us</NavItem>
                </NavList>

            </StyledOffcanvasBody>
            <StyledOffcanvasFooter>
                <Image src={Logo} width='40%' />

            </StyledOffcanvasFooter>
        </StyledOffcanvas>
    );
};

export default OffCanvas;

const StyledOffcanvas = styled(Offcanvas)`
    background-color:rgba(28, 17, 30, 0.42);;
  backdrop-filter: blur(10px); /* Effetto blur */
  -webkit-backdrop-filter: blur(10px); 

 
  
`;

const StyledOffcanvasHeader = styled(Offcanvas.Header)`
    
color: var(--color-secondary)!important;

    .btn-close {
        color: var(--color-secondary)!important;
        background-color: var(--color-secondary)!important;

    }
`;
const StyledOffcanvasFooter = styled.div`
    display: flex;
    justify-content: center;
     @media (max-width: 469px) {
     margin-top: 5px;
     z-index: 0;

    }
`;


const StyledOffcanvasBody = styled(Offcanvas.Body)`
    padding: 3rem 2rem 2rem;
    display: flex;
    flex-direction: column;


     @media (max-width: 500px){
        text-align: center;
    }
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 1rem; // Aggiunto margin bottom per spaziatura tra le liste
`;

const NavItem = styled.li`
    cursor: pointer;
    font-size: 1.8rem; 
    margin-bottom: 0.5rem; 
    color: white;
    transition: color 0.2s ease;

    &:hover {
        color: var(--color-secondary);
    }
`;