import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../Atoms/Button';
import Title from '../../Atoms/Title';
import Logo from '../../../Layout/Assets/Logo.png';
import Image from "../../Atoms/Image";
import { RxHamburgerMenu } from "react-icons/rx";
import Hr from '../../Atoms/Hr';
import OffCanvas from '../../Molecules/NavbarMolecules/OffCanvas';

const Nav = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <NavbarWrapper>
            <LogoSection>
                <Image src={Logo} alt="Logo" width="100px"/>
                <Hr height={'65px'} width={'1px'} color={'#FEFBF6'} />
               {/*  <Info>
                    <Title fontSize={'14px'} margin={'3.5px 0;'}>Bacaro Porto</Title>
                    <Title fontSize={'12px'} margin={'0px'}>April, 2025</Title>
                </Info> */}
            </LogoSection>
            <NavSection>
                <HamburgerMenu onClick={handleShow} />
            </NavSection>
            <OffCanvas show={show} onHide={handleClose} />
        </NavbarWrapper>
    );
};

export default Nav;

const NavbarWrapper = styled.div`
  background-color: transparent;
  color: var(--color-secondary);
border-bottom: 2px solid var(--color-secondary)!important;
padding: 1rem 5.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  transition: background-color 1s;

  @media screen and (max-width: 479px) {
      padding: 1rem 2.5rem;

  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.align || 'start'};
`;

const HamburgerMenu = styled(RxHamburgerMenu)`
  font-size: 2.5rem;
  cursor: pointer;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 479px) {
    

  }
`;

const Separator = styled.div`
  width: 1px;
  height: 50px;
  background-color: black;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .location,
  .date {
    font-size: 12px;
  }
`;
