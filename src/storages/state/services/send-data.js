//#region Imports

import api from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

export const getOptions = (countryId) => api.get(ENDPOINT.STATE.OPTIONS(countryId));
