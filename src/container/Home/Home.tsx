import React from 'react';
import Section from '@components/section/Section';
import SvgIcon from '@components/svgIcon/SvgIcon';
import Input from '@components/input/Input';
import { HomeTitle, IllustrationContainer, InputContainer } from './Home.styles';

// @ts-ignore
import Illustration from '../../../public/assets/images/illustration.svg';

const HomeContainer = () => {
  return (
    <Section>
      <HomeTitle>
        <strong>Bebidas geladas &nbsp;</strong> a <strong>&nbsp;preço &nbsp;</strong>&nbsp; de mercado na sua casa <strong>&nbsp;agora</strong>
      </HomeTitle>
      <InputContainer>
        <Input name="address" type="text" placeholder="Inserir endereço para ver preço" />
      </InputContainer>
      <IllustrationContainer>
        <SvgIcon src={Illustration} width="600px" height="400px" />
      </IllustrationContainer>
    </Section>
  );
};

export default HomeContainer;
