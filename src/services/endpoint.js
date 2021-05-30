//#region Imports

import { COUNTRY } from '@env';
import buildQueryParams from 'utils/functions/buildQueryParams';

//#endregion

const ENDPOINT = {
    BASE: 'http://localhost:8756',
    SECURITY: {
        LOGIN: 'security/login',
        REFRESH: 'security/refresh',
        LOCK: (id) => `security/lock?${buildQueryParams({ id })}`,
        UNLOCK: (id) => `security/unlock?${buildQueryParams({ id })}`,
        ENABLE: (id) => `security/enable?${buildQueryParams({ id })}`,
        UNABLE: (id) => `security/unable?${buildQueryParams({ id })}`
    },
    PERSON: {
        THIS: 'person'
    },
    COMPANY: {
        THIS: 'company'
    },
    ADDRESS: {
        CEP: (cep) => `https://viacep.com.br/ws/${cep}/json/`
    },
    CITY: {
        OPTIONS: (stateId) => `city/options?${buildQueryParams({ stateId })}`
    },
    STATE: {
        OPTIONS: (countryId = COUNTRY) => `state/options?${buildQueryParams({ countryId })}`
    }
};

export default ENDPOINT;
