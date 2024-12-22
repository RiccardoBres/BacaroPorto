import React from 'react';
import styled from 'styled-components';

const Title = ({ children, level, fontSize, color, margin , className}) => {
  const Tag = `h${level || 1}`; // Default: h1
  return (
    <StyledTitle as={Tag} fontSize={fontSize} color={color} margin={margin} className={className}>
      {children}
    </StyledTitle>
  );
};

export default Title;

const StyledTitle = styled.h1`
  font-size: ${(props) => props.fontSize || '24px'};
  color: ${(props) => props.color || '#FEFBF6'};
  margin: ${(props) => props.margin || '0 0 1rem 0'};
  font-weight: bold;
  line-height: 1.4;
`;
