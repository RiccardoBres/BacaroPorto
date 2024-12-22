import React from 'react';
import styled from 'styled-components';

const Hr = ({ color, thickness, margin, width, height }) => {
  return <StyledHr color={color} thickness={thickness} margin={margin} width={width} height={height} />;
};

export default Hr;

const StyledHr = styled.hr`
  border: none;
  height: ${(props) => props.thickness || '2px'};
  color: ${(props) => props.color || '#ccc'};
  margin: ${(props) => props.margin || '1rem 0'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '0'};
`;
