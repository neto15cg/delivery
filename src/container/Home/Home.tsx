import React, { useState } from 'react';
import Section from '@components/section/Section';
import SvgIcon from '@components/svgIcon/SvgIcon';
import InputDropDown from '@components/inputDropDown/InputDropDown';
import { InputDropDownOption } from '@components/inputDropDown/InputDropDown.types';
import useDebounce from '@utils/useDebounce';
import { getPlaceById, getPlacesPredicitons, PlaceDetailType, PredictionType } from '@services/home';
import { HomeTitle, IllustrationContainer, InputContainer } from './Home.styles';

// @ts-ignore
import Illustration from '../../../public/assets/images/illustration.svg';

const Home = () => {
  const [locationsPredictions, setLocationsPredictions] = useState<PredictionType[]>([]);
  const [placeDetail, setPlaceDetail] = useState<PlaceDetailType | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const handleGetPredictions = async (searchQuery: string) => {
    const places = await getPlacesPredicitons(searchQuery);
    setLocationsPredictions(places);
  };

  const handleGetPlaceById = async (id: string) => {
    setLoading(true);
    const place = await getPlaceById(id);
    setLoading(false);
    setPlaceDetail(place);
  };

  const handleClickOptions = (option: InputDropDownOption) => {
    handleGetPlaceById(option.value);
  };

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
    getLocationsPredictionsDebounce(value);
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
        />
      </InputContainer>
      <IllustrationContainer>
        <SvgIcon src={Illustration} width="600px" height="400px" />
      </IllustrationContainer>
    </Section>
  );
};

export default Home;
