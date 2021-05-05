//#region Imports

import api from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

export const postRegister = (data) => api.post(ENDPOINT.COMPANY.THIS, data);
