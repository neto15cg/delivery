import React, { useState } from 'react';
import Axios from 'axios';
import Section from '@components/section/Section';
import SvgIcon from '@components/svgIcon/SvgIcon';
import InputDropDown from '@components/inputDropDown/InputDropDown';
import { InputDropDownOption } from '@components/inputDropDown/InputDropDown.types';
import useDebounce from '@utils/useDebounce';
import { HomeTitle, IllustrationContainer, InputContainer } from './Home.styles';

// @ts-ignore
import Illustration from '../../../public/assets/images/illustration.svg';

const HomeContainer = () => {
  const [locationPredictions, setLocationsPredictions] = useState<any>([]);
  const [locationDetail, setLocationDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPredictions = async (find: string) => {
    try {
      Axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${find}&types=geocode&language=pt-bt&key=AIzaSyDj-0PwzEQbDNhkRwVxSVG1SerXrDPemjs`,
      ).then((response) => {
        const {
          data: { predictions },
        } = response;
        setLocationsPredictions(predictions);
      });
    } catch (e) {
      setLocationsPredictions([]);
    }
  };

  const getPlaceById = async (id: string) => {
    setLoading(true);
    try {
      Axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,geometry&key=AIzaSyDj-0PwzEQbDNhkRwVxSVG1SerXrDPemjs
  `,
      ).then((response) => {
        const {
          data: { result },
        } = response;
        setLocationDetail(result);
      });
    } catch (e) {
      setLocationDetail(undefined);
    }
    setLoading(false);
  };

  const handleClickOptions = (option: InputDropDownOption) => {
    getPlaceById(option.value);
  };

  const [getPredictionsDebounced] = useDebounce(async (searchQuery) => {
    setLoading(true);
    await getPredictions(searchQuery);
    setLoading(false);
  }, 500);

  const handleChangeSearch = (event: React.ChangeEvent<{ name?: string; value: string }>) => {
    const {
      target: { value },
    } = event;
    getPredictionsDebounced(value);
  };

  console.log(locationDetail);

  return (
    <Section>
      <HomeTitle>
        <strong>Bebidas geladas</strong> a <strong>preço</strong> de mercado na sua casa <strong>agora</strong>
      </HomeTitle>
      <InputContainer>
        <InputDropDown
          loading={loading}
          options={locationPredictions.map((location) => ({ label: location.description, value: location.place_id }))}
          onClickOption={handleClickOptions}
          name="address"
          type="text"
          placeholder="Inserir endereço para ver preço"
          onChange={handleChangeSearch}
        />
      </InputContainer>
      <IllustrationContainer>
        <SvgIcon src={Illustration} width="600px" height="400px" />
      </IllustrationContainer>
    </Section>
  );
};

export default HomeContainer;
