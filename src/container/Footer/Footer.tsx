import React from 'react';
import SvgIcon from '@components/svgIcon/SvgIcon';
import Logo from '@components/logo/Logo';
import { FooterContent, Phrase, StyledFooter, StyledSvg } from './Footer.styles';

// @ts-ignore
import Wave from '../../../public/assets/images/wave.svg';
// @ts-ignore
import DrinkFooter from '../../../public/assets/icons/drink-footer.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <StyledSvg src={Wave} />
        <SvgIcon src={DrinkFooter} width="60px" height="60px" />
        <Logo />
        <Phrase>SE FOR BEBER, DEIXA QUE A GENTE LEVA PARA VOCÊ, NÃO DIRIJA</Phrase>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
