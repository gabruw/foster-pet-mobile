//#region Imports

import api from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

export const getOptions = (cityId) => api.get(ENDPOINT.CITY.OPTIONS(cityId));
