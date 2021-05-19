//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment } from 'react';
import useAddressContext from 'storages/address/context';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import FieldCep from './CepField';
import CityField from './CityField';
import StateField from './StateField';

//#endregion

const FieldsAddress = () => {
    const { isLoading } = useAddressContext;

    return (
        <Fragment>
            <FieldInput icon='map-marker-alt' name={ADDRESS_FIELDS.NAME} label={ADDRESS_LABELS.NAME} />
            <FieldCep />

            <FieldInput icon='road' isLoading={isLoading} name={ADDRESS_FIELDS.ROAD} label={ADDRESS_LABELS.ROAD} />
            <FieldInput icon='school' name={ADDRESS_FIELDS.NEIGHBORHOOD} label={ADDRESS_LABELS.NEIGHBORHOOD} />

            <FieldInput
                isLoading={isLoading}
                icon='sort-numeric-up'
                name={ADDRESS_FIELDS.NUMBER}
                label={ADDRESS_LABELS.NUMBER}
            />
            <FieldInput
                icon='map'
                isLoading={isLoading}
                name={ADDRESS_FIELDS.COMPLEMENT}
                label={ADDRESS_LABELS.COMPLEMENT}
            />

            <StateField />
            <CityField />
        </Fragment>
    );
};

export default FieldsAddress;
