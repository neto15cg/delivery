import React from 'react';
import { StyledLogo } from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo = ({ isHeader }: LogoProps) => {
  return <StyledLogo isHeader={isHeader}>delivery</StyledLogo>;
};

export default Logo;
