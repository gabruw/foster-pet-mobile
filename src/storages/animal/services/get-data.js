//#region Imports

import api from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

export const getAnimal = (data) => api.get(ENDPOINT.ANIMAL.GET_ANIMAL(data));
