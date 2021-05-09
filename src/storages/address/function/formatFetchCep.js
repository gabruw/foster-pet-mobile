//#region Imports

import ADDRESS_FIELD from 'utils/constants/field/address';
import CITY_FIELD from 'utils/constants/field/city';
import STATE_FIELD from 'utils/constants/field/state';

//#endregion

const formatFetchCep = (address) => {
    if (address) {
        address = {
            [STATE_FIELD.THIS]: address.uf,
            [ADDRESS_FIELD.CEP]: address.cep,
            [CITY_FIELD.THIS]: address.localidade,
            [ADDRESS_FIELD.ROAD]: address.logradouro,
            [ADDRESS_FIELD.NEIGHBORHOOD]: address.bairro,
            [ADDRESS_FIELD.COMPLEMENT]: address.complemento
        };
    }
    return address;
};

export default formatFetchCep;
