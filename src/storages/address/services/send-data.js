//#region Imports

import api from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

export const getCep = (cep) => api.get(ENDPOINT.ADDRESS.CEP(cep));
