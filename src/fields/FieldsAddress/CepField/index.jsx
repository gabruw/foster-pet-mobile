//#region Imports

import FieldInput from 'components/FieldInput';
import React from 'react';
import useAddressContext from 'storages/address/context';
import ADDRESS_FIELD from 'utils/constants/field/address';
import ADDRESS_LABEL from 'utils/constants/label/address';
import cep from 'utils/validation/masks/cep';

//#endregion

const FieldCep = ({ control, errors, getValues }) => {
    const { fetchCep, isLoading } = useAddressContext();

    return (
        <FieldInput
            mask={cep}
            errors={errors}
            control={control}
            isLoading={isLoading}
            icon='sign-direction'
            name={ADDRESS_FIELD.CEP}
            label={ADDRESS_LABEL.CEP}
            onBlur={() => fetchCep(getValues(ADDRESS_FIELD.CEP))}
        />
    );
};

export default FieldCep;
