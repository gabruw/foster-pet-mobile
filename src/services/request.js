//#region Imports

import axios from 'axios';
import ENDPOINT from './endpoint';

//#endregion

const api = axios.create({
    baseURL: ENDPOINT.BASE
});

export default api;
