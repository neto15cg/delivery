import { proxyurl } from '@services/home';

export const MockUrlLocationPredictions = `${proxyurl}https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Avenida Olívia&types=geocode&language=pt-bt&key=AIzaSyDj-0PwzEQbDNhkRwVxSVG1SerXrDPemjs`;

export const LocationsPredictionsMock = {
  predictions: [
    {
      description: 'Avenida Olívia Flores - Universidade, Vitória da Conquista - BA, Brasil',
      matched_substrings: [{ length: 21, offset: 0 }],
      place_id:
        'EklBdmVuaWRhIE9sw612aWEgRmxvcmVzIC0gVW5pdmVyc2lkYWRlLCBWaXTDs3JpYSBkYSBDb25xdWlzdGEgLSBCQSwgQnJhc2lsIi4qLAoUChIJ9xzVa_M6RgcRBWASVsMVKRgSFAoSCf8CeIiSOkYHEQ7DW4ZHmpu_',
      reference:
        'EklBdmVuaWRhIE9sw612aWEgRmxvcmVzIC0gVW5pdmVyc2lkYWRlLCBWaXTDs3JpYSBkYSBDb25xdWlzdGEgLSBCQSwgQnJhc2lsIi4qLAoUChIJ9xzVa_M6RgcRBWASVsMVKRgSFAoSCf8CeIiSOkYHEQ7DW4ZHmpu_',
      structured_formatting: {
        main_text: 'Avenida Olívia Flores',
        main_text_matched_substrings: [{ length: 21, offset: 0 }],
        secondary_text: 'Universidade, Vitória da Conquista - BA, Brasil',
      },
      terms: [
        { offset: 0, value: 'Avenida Olívia Flores' },
        { offset: 24, value: 'Universidade' },
        { offset: 38, value: 'Vitória da Conquista' },
        { offset: 61, value: 'BA' },
        { offset: 65, value: 'Brasil' },
      ],
      types: ['route', 'geocode'],
    },
  ],
  status: 'Ok',
};

export const MockUrlLocationDetail = `${proxyurl}https://maps.googleapis.com/maps/api/place/details/json?place_id=EklBdmVuaWRhIE9sw612aWEgRmxvcmVzIC0gVW5pdmVyc2lkYWRlLCBWaXTDs3JpYSBkYSBDb25xdWlzdGEgLSBCQSwgQnJhc2lsIi4qLAoUChIJ9xzVa_M6RgcRBWASVsMVKRgSFAoSCf8CeIiSOkYHEQ7DW4ZHmpu_&fields=name,geometry&key=AIzaSyDj-0PwzEQbDNhkRwVxSVG1SerXrDPemjs`;

export const LocationDetailMock = {
  result: {
    geometry: {
      location: { lat: -14.8847373, lng: -40.8105754 },
      viewport: { northeast: { lat: -14.88338831970849, lng: -40.80922641970849 }, southwest: { lat: -14.8860862802915, lng: -40.81192438029149 } },
    },
    name: 'Avenida Olívia Flores',
  },
};
