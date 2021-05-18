//#region Imports

import onlyNumber from './onlyNumber';

//#endregion

const cep = (value) => {
    value = onlyNumber(value);
    value = value.replace(/^(\d{5})(\d)/g, '$1-$2');
    return value;
};

export default cep;
