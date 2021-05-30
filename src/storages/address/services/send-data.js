//#region Imports

import api from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

export const getCep = (cep) => api.get(ENDPOINT.ADDRESS.CEP(cep));
export const getCityOptions = (stateId) => api.get(ENDPOINT.CITY.OPTIONS(stateId));
export const getStateOptions = () => api.get(ENDPOINT.STATE.OPTIONS());
