//#region Imports

import maxLength from './maxLength';
import onlyNumber from './onlyNumber';

//#endregion

const cnpj = (value) => {
    value = onlyNumber(value);
    value = maxLength(value, 14);

    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');

    return value;
};

export default cnpj;
