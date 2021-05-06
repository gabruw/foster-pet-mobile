//#region Imports

import FieldsCompany from 'fields/FieldsCompany';
import FieldsPerson from 'fields/FieldsPerson';
import React from 'react';

//#endregion

const FORM_REGISTER_MODULE = (control, errors, setValue) => ({
    COMPANY: { text: 'Empresa', value: 'COMPANY', component: <FieldsCompany control={control} errors={errors} /> },
    PERSON: {
        text: 'Person',
        value: 'PERSON',
        component: <FieldsPerson control={control} errors={errors} setValue={setValue} />
    }
});

export const FORM_REGISTER_VALUES = [
    { text: 'Person', value: 'PERSON' },
    { text: 'Empresa', value: 'COMPANY' }
];

export const DEFAULT_VALUE = FORM_REGISTER_VALUES[0].value;

export default FORM_REGISTER_MODULE;
