import React from 'react';
import styled from 'styled-components';

const Image = ({ src, alt, width, height, borderRadius, className }) => {
  return <StyledImage src={src} alt={alt} width={width} height={height} borderRadius={borderRadius} className={className} />;
};

export default Image;

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderRadius || '0'};
  object-fit: cover;
`;
