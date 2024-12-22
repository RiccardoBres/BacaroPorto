import React from 'react';
import styled from 'styled-components';


const Button = ({ children, primary, onClick }) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background-color: ${(props) => props.primary ? '#FF6347' : '#f0f0f0'};
  color: ${(props) => props.primary ? '#fff' : '#000'};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;