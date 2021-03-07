import React, { useState } from 'react';
import Section from '@components/section/Section';
import SvgIcon from '@components/svgIcon/SvgIcon';
import InputDropDown from '@components/inputDropDown/InputDropDown';
import { InputDropDownOption } from '@components/inputDropDown/InputDropDown.types';
import useDebounce from '@utils/useDebounce';
import { getPlaceById, getPlacesPredicitons, PredictionType } from '@services/home';
import { normalizeString } from '@utils/normalizeText';
import { HomeTitle, IllustrationContainer, InputContainer } from './Home.styles';
import { HomeProps } from './Home.types';
// @ts-ignore
import Illustration from '../../../public/assets/images/illustration.svg';
// @ts-ignore
import MapMarker from '../../../public/assets/icons/map-marker.svg';

const Home = ({ onNavigate }: HomeProps) => {
  const [locationsPredictions, setLocationsPredictions] = useState<PredictionType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGetPredictions = async (searchQuery: string) => {
    const places = await getPlacesPredicitons(searchQuery);
    setLocationsPredictions(places);
  };

  const handleGetPlaceById = async (id: string) => {
    setLoading(true);
    const place = await getPlaceById(id);
    setLoading(false);
    if (onNavigate) {
      onNavigate({ lat: place.geometry.location.lat, lng: place.geometry.location.lng });
    }
  };

  const handleClickOptions = (option: InputDropDownOption) => handleGetPlaceById(option.value);

  const handleClearOptions = () => {
    if (locationsPredictions.length > 0) {
      setLocationsPredictions([]);
    }
  };

  const [getLocationsPredictionsDebounce] = useDebounce(async (searchQuery: string) => {
    if (searchQuery.length > 3) {
      setLoading(true);
      await handleGetPredictions(searchQuery);
      return setLoading(false);
    }
    handleClearOptions();
  }, 400);

  const handleChangeSearch = (event: React.ChangeEvent<{ name?: string; value: string }>) => {
    const {
      target: { value },
    } = event;
    getLocationsPredictionsDebounce(normalizeString(value));
  };

  return (
    <Section>
      <HomeTitle data-testid="home-title">
        <strong>Bebidas geladas</strong> a <strong>preço</strong> de mercado na sua casa <strong>agora</strong>
      </HomeTitle>
      <InputContainer>
        <InputDropDown
          testId="input-drop-down-home"
          loading={loading}
          options={locationsPredictions.map((location: PredictionType) => ({ label: location.description, value: location.place_id }))}
          onClickOption={handleClickOptions}
          name="address"
          type="text"
          placeholder="Inserir endereço para ver preço"
          onChange={handleChangeSearch}
          onClear={handleClearOptions}
          leftIcon={MapMarker}
        />
      </InputContainer>
      <IllustrationContainer>
        <SvgIcon src={Illustration} width="600px" height="400px" />
      </IllustrationContainer>
    </Section>
  );
};

export default Home;
