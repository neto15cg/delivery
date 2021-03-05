import React from 'react';
import SvgIcon from '@components/svgIcon/SvgIcon';
import Logo from '@components/logo/Logo';
import Button from '@components/button/Button';
import { HeaderContent, StyledHeader } from './Header.styles';
import { HeaderProps } from './Header.types';

// @ts-ignore
import IconLogo from '../../../public/assets/icons/drink-header.svg';

const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderContent>
        <Logo isHeader />
        <SvgIcon src={IconLogo} width="40px" height="40px" />
        <div>
          <Button type="button">Entrar</Button>
        </div>
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;
