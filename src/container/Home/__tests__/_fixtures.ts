export const MockUrlLocationPredictions = `https://frozen-badlands-79535.herokuapp.com/predictions?search=Avenida Olívia`;

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

export const MockUrlLocationDetail = `https://frozen-badlands-79535.herokuapp.com/predictions/detail?id=EklBdmVuaWRhIE9sw612aWEgRmxvcmVzIC0gVW5pdmVyc2lkYWRlLCBWaXTDs3JpYSBkYSBDb25xdWlzdGEgLSBCQSwgQnJhc2lsIi4qLAoUChIJ9xzVa_M6RgcRBWASVsMVKRgSFAoSCf8CeIiSOkYHEQ7DW4ZHmpu_`;

export const LocationDetailMock = {
  result: {
    geometry: {
      location: { lat: -14.8847373, lng: -40.8105754 },
      viewport: { northeast: { lat: -14.88338831970849, lng: -40.80922641970849 }, southwest: { lat: -14.8860862802915, lng: -40.81192438029149 } },
    },
    name: 'Avenida Olívia Flores',
  },
};
