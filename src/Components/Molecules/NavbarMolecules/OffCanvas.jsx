import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../../Atoms/Title';
import Button from '../../Atoms/Button';
import Hr from '../../Atoms/Hr';
import Offcanvas from 'react-bootstrap/Offcanvas';

const OffCanvas = ({ show, onHide }) => {


    return (
        <StyledOffcanvas show={show} onHide={onHide}>
            <StyledOffcanvasHeader closeButton> 
            </StyledOffcanvasHeader>
            <StyledOffcanvasBody>
                <div className="container-list-item">
                    <Title className="title-offCanvas">
                        Home
                    </Title>
                    <Title className="title-offCanvas">
                        Events
                    </Title>
                    <Title className="title-offCanvas">
                        Menu
                    </Title>
                    <Title className="title-offCanvas">
                        Beyond the Artist
                    </Title>
                    <Title className="title-offCanvas">
                        Beyond the Music
                    </Title>
                </div>
                <Hr />
                <div className="container-list-item info">
                    <Title className="title-offCanvas">
                        Help & Info
                    </Title>
                    <Title className="title-offCanvas">
                        Getting Here
                    </Title>
                </div>
                <Hr />
                <div className="container-list-item info">
                    <Title className="title-offCanvas">
                        Contact Us
                    </Title>
                    <Title className="title-offCanvas">
                        Contribute
                    </Title>
                </div>
                <Hr color={'var(--color-secondary)'}/>
            </StyledOffcanvasBody>
        </StyledOffcanvas>
    );
};

export default OffCanvas;

const StyledOffcanvas = styled(Offcanvas)`
  background-color: var(--color-dark);
`;

const StyledOffcanvasHeader = styled(Offcanvas.Header)`
   display: flex!important;
    justify-content: end!important;
    color: $color-primary!important;
    width: 100%!important;

   .btn-close {
    color: $color-primary!important;

  }
`;


const StyledOffcanvasBody = styled(Offcanvas.Body)`
 padding: 3rem 2rem 2rem!important;
    display: flex;
    flex-direction: column;

.container-list-item {
    margin-bottom: 0rem;

    &.info {
    color: secondary;
    }
}

.title-offCanvas{
    cursor: pointer!important;
    transition: all 0.2s;

    &:hover {
    color: var(--color-secondary) !important;
    }
}
`;
