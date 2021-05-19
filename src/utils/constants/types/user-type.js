//#region Imports

import FieldsCompany from 'components-field/FieldsCompany';
import FieldsPerson from 'components-field/FieldsPerson';

//#endregion

export const USER_TYPE_VALUES = {
    PERSON: {
        text: 'Pessoa',
        value: 'PERSON'
    },
    COMPANY: {
        text: 'Empresa',
        value: 'COMPANY'
    }
};

export const USER_TYPE_OPTIONS = Object.values(USER_TYPE_VALUES);

export const USER_TYPE_FIELDS = {
    PERSON: {
        component: FieldsPerson,
        ...USER_TYPE_VALUES.PERSON
    },
    COMPANY: {
        component: FieldsCompany,
        ...USER_TYPE_VALUES.COMPANY
    }
};
