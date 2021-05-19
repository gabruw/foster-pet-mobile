//#region Imports

import api from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

export const getCep = (cep) => api.get(ENDPOINT.ADDRESS.CEP(cep));
export const getCityOptions = (cityId) => api.get(ENDPOINT.CITY.OPTIONS(cityId));
export const getStateOptions = (countryId) => api.get(ENDPOINT.STATE.OPTIONS(countryId));
