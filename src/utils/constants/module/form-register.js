//#region Imports

import FieldsCompany from 'fields/FieldsCompany';
import FieldsPerson from 'fields/FieldsPerson';
import authenticationSchema from 'utils/validation/schemas/authentication';
import { companyObjectSchema } from 'utils/validation/schemas/company';
import { personObjectSchema } from 'utils/validation/schemas/person';

//#endregion

export const FORM_REGISTER_VALUES = {
    PERSON: {
        text: 'Person',
        value: 'PERSON'
    },
    COMPANY: {
        text: 'Empresa',
        value: 'COMPANY'
    }
};

export const FORM_REGISTER_MODULE = {
    PERSON: {
        component: FieldsPerson,
        ...FORM_REGISTER_VALUES.PERSON
    },
    COMPANY: {
        component: FieldsCompany,
        ...FORM_REGISTER_VALUES.COMPANY
    }
};

export const FORM_REGISTER_OPTIONS = Object.values(FORM_REGISTER_VALUES);

export const FORM_REGISTER_SCHEMA = {
    PERSON: personObjectSchema.concat(authenticationSchema),
    COMPANY: companyObjectSchema.concat(authenticationSchema)
};
