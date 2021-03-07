import React from 'react';
import SvgIcon from '@components/svgIcon/SvgIcon';
import Logo from '@components/logo/Logo';
import Button from '@components/button/Button';
import { useHistory } from 'react-router-dom';
import { ContainerBag, ContainerButtons, HeaderContent, StyledHeader } from './Header.styles';
import { HeaderProps } from './Header.types';

// @ts-ignore
import IconLogo from '../../../public/assets/icons/drink-header.svg';
// @ts-ignore
import IconBag from '../../../public/assets/icons/shopping-bag.svg';

const Header = ({ isProductList }: HeaderProps) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };
  return (
    <StyledHeader>
      <HeaderContent>
        <Logo isHeader onClick={isProductList && handleClick} />
        <SvgIcon src={IconLogo} width="40px" height="40px" />
        <ContainerButtons>
          <Button type="button">Entrar</Button>
          {isProductList && (
            <ContainerBag items={2}>
              <SvgIcon src={IconBag} width="32px" height="32px" fill="#464646" />
            </ContainerBag>
          )}
        </ContainerButtons>
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;
