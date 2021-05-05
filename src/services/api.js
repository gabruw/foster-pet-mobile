//#region Imports

import axios from 'axios';
import ENDPOINT from './endpoint';

//#endregion

const api = axios.create({
    baseURL: ENDPOINT.BASE
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    //     'Content-Type': 'application/json;charset=UTF-8'
    // }
});

export default api;
