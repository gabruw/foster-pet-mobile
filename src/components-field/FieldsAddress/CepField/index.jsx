//#region Imports

import FieldInput from 'components/FieldInput';
import React, { useCallback } from 'react';
import useAddressContext from 'storages/address/context';
import useFormContext from 'storages/form/context';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import cep from 'utils/validations/masks/cep';

//#endregion

const FieldCep = () => {
    const { getValues } = useFormContext();
    const { fetchCep, isLoading } = useAddressContext();

    const fetch = useCallback(() => {
        const value = getValues(ADDRESS_FIELDS.CEP);
        value && fetchCep(value);
    }, [fetchCep]);

    return (
        <FieldInput
            mask={cep}
            icon='sign'
            isLoading={isLoading}
            onBlur={() => fetch()}
            name={ADDRESS_FIELDS.CEP}
            label={ADDRESS_LABELS.CEP}
        />
    );
};

export default FieldCep;
