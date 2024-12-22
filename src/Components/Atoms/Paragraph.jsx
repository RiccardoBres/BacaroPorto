import React from 'react';
import styled from 'styled-components';

const Paragraph = ({ children, fontSize, color, textAlign, margin }) => {
  return (
    <StyledParagraph
      fontSize={fontSize}
      color={color}
      textAlign={textAlign}
      margin={margin}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;

const StyledParagraph = styled.p`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.color || '#333'};
  text-align: ${(props) => props.textAlign || 'left'};
  margin: ${(props) => props.margin || '0 0 1rem 0'};
  line-height: 1.6;
`;

