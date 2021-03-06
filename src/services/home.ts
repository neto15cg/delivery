import Axios from 'axios';

export interface PredictionType {
  description: string;
  // eslint-disable-next-line camelcase
  place_id: string;
  reference: string;
}

export interface PlaceDetailType {
  geometry: { location: { lat: number; lng: number } };
  viewport: { northeast: { lat: number; lng: number }; southwest: { lat: number; lng: number } };
  name: string;
}

export const getPlacesPredicitons = async (searchQuery: string): Promise<PredictionType[]> => {
  try {
    const response = await Axios.get(`https://frozen-badlands-79535.herokuapp.com/predictions?search=${searchQuery}`);

    const {
      data: { predictions },
    } = response;
    return predictions;
  } catch (e) {
    return [];
  }
};

export const getPlaceById = async (id: string): Promise<PlaceDetailType | undefined> => {
  try {
    const response = await Axios.get(`https://frozen-badlands-79535.herokuapp.com/predictions/detail?id=${id}`);
    const {
      data: { result },
    } = response;
    return result;
  } catch (e) {
    return undefined;
  }
};
