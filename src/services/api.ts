import { mergeDeep } from '@utils/mergeDeep';
import axios from 'axios';

const api = (props?): any => {
  const apiCall = axios.create();

  apiCall.interceptors.request.use((config) => {
    let updatedConfig = {
      headers: {
        common: {
          'Access-Control-Allow-Origin': '*',
        },
        Accept: 'application/json',
        ContentType: 'application/json',
      },
    };
    if (config) {
      updatedConfig = mergeDeep(config, updatedConfig);
    }
    return updatedConfig;
  });

  return apiCall;
};

export default api;
