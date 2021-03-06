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

// I need this because my free server was block requests by cors
export const proxyurl = 'https://cors-anywhere.herokuapp.com/';
export const getPlacesPredicitons = async (find: string): Promise<PredictionType[]> => {
  try {
    const response = await Axios.get(
      `${proxyurl}https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${find}&types=geocode&language=pt-bt&key=AIzaSyDj-0PwzEQbDNhkRwVxSVG1SerXrDPemjs`,
    );
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
    const response = await Axios.get(
      `${proxyurl}https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,geometry&key=AIzaSyDj-0PwzEQbDNhkRwVxSVG1SerXrDPemjs
  `,
    );
    const {
      data: { result },
    } = response;
    return result;
  } catch (e) {
    return undefined;
  }
};
