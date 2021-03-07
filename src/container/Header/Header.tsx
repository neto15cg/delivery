import React from 'react';
import SvgIcon from '@components/svgIcon/SvgIcon';
import Logo from '@components/logo/Logo';
import Button from '@components/button/Button';
import { ContainerBag, ContainerButtons, HeaderContent, StyledHeader, StyledIconHeader } from './Header.styles';
import { HeaderProps } from './Header.types';

// @ts-ignore
import IconLogo from '../../../public/assets/icons/drink-header.svg';
// @ts-ignore
import IconBag from '../../../public/assets/icons/shopping-bag.svg';

const Header = ({ isProductList, bagProducts, onGoBack }: HeaderProps) => {
  const handleGoBack = () => onGoBack && onGoBack();

  const bagLength = bagProducts && bagProducts.length > 0 && bagProducts.reduce((acc, obj) => acc + obj.value, 0);

  return (
    <StyledHeader>
      <HeaderContent>
        <Logo isHeader onClick={isProductList && handleGoBack} />
        <StyledIconHeader data-testid="icon-logo-header" onClick={isProductList && handleGoBack}>
          <SvgIcon src={IconLogo} width="40px" height="40px" />
        </StyledIconHeader>
        <ContainerButtons>
          <Button type="button">Entrar</Button>
          {isProductList && (
            <ContainerBag items={bagLength || 0}>
              <SvgIcon src={IconBag} width="32px" height="32px" fill="#464646" />
            </ContainerBag>
          )}
        </ContainerButtons>
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;
