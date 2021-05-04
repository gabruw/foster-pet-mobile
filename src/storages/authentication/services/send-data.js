//#region Imports

import api from 'services/request';
import ENDPOINT from 'services/endpoint';

//#endregion

export const postLogin = (data) => api.post(ENDPOINT.SECURITY.LOGIN, data);
