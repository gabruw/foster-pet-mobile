//#region Imports

import ADDRESS_FIELDS from 'utils/constants/fields/address';
import CITY_FIELDS from 'utils/constants/fields/city';
import STATE_FIELDS from 'utils/constants/fields/state';

//#endregion

const formatFetchCep = (address) => {
    if (address) {
        address = {
            [STATE_FIELDS.THIS]: address.uf,
            [ADDRESS_FIELDS.CEP]: address.cep,
            [CITY_FIELDS.THIS]: address.localidade,
            [ADDRESS_FIELDS.ROAD]: address.logradouro,
            [ADDRESS_FIELDS.NEIGHBORHOOD]: address.bairro,
            [ADDRESS_FIELDS.COMPLEMENT]: address.complemento
        };
    }
    return address;
};

export default formatFetchCep;
