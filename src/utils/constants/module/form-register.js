//#region Imports

import FieldsCompany from 'fields/FieldsCompany';
import FieldsPerson from 'fields/FieldsPerson';
import authenticationSchema from 'utils/validation/schemas/authentication';
import personSchema from 'utils/validation/schemas/company';
import companySchema from 'utils/validation/schemas/person';

//#endregion

const FORM_REGISTER_MODULE = {
    COMPANY: {
        text: 'Empresa',
        value: 'COMPANY',
        component: FieldsCompany
    },
    PERSON: {
        text: 'Person',
        value: 'PERSON',
        component: FieldsPerson
    }
};

export const SCHEMA = {
    PERSON: personSchema.concat(authenticationSchema),
    COMPANY: companySchema.concat(authenticationSchema)
};

export const FORM_REGISTER_VALUES = [
    { text: 'Person', value: 'PERSON' },
    { text: 'Empresa', value: 'COMPANY' }
];

export const DEFAULT_VALUE = FORM_REGISTER_VALUES[0].value;

export default FORM_REGISTER_MODULE;
