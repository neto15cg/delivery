import React, { useEffect, useState } from 'react';
import Section from '@components/section/Section';
import SvgIcon from '@components/svgIcon/SvgIcon';
import InputDropDown from '@components/inputDropDown/InputDropDown';
import { InputDropDownOption } from '@components/inputDropDown/InputDropDown.types';
import { HomeTitle, IllustrationContainer, InputContainer } from './Home.styles';

// @ts-ignore
import Illustration from '../../../public/assets/images/illustration.svg';

const optionsTemp = [
  {
    label: 'Avenida',
    value: '123123123',
  },
  {
    label: 'Endereço 2',
    value: '1231232s3',
  },
  {
    label: 'Endereço 2',
    value: '12312x3e2s3',
  },
  {
    label: 'Endereço 2',
    value: '123121e32s3',
  },
  {
    label: 'Endereço 2',
    value: '12312g3223s3',
  },
  {
    label: 'Endereço 2',
    value: '12312c32s3',
  },
  {
    label: 'Endereço 2',
    value: '1231qwe2c32s3',
  },
  {
    label: 'Endereço 2',
    value: '12312cx32s3',
  },
];

const HomeContainer = () => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClickOptions = (option: InputDropDownOption) => {
    console.log(option);
  };

  useEffect(() => {
    setTimeout(() => {
      setOptions(optionsTemp);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Section>
      <HomeTitle>
        <strong>Bebidas geladas</strong> a <strong>preço</strong> de mercado na sua casa <strong>agora</strong>
      </HomeTitle>
      <InputContainer>
        <InputDropDown
          loading={loading}
          options={options}
          onClickOption={handleClickOptions}
          name="address"
          type="text"
          placeholder="Inserir endereço para ver preço"
        />
      </InputContainer>
      <IllustrationContainer>
        <SvgIcon src={Illustration} width="600px" height="400px" />
      </IllustrationContainer>
    </Section>
  );
};

export default HomeContainer;
