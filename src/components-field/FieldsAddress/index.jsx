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
            <FieldInput
                icon='map-marker-alt'
                name={ADDRESS_FIELDS.NAME}
                label={ADDRESS_LABELS.NAME}
                mask={(value) => maxLength(value, 70)}
            />

            <FieldCep />

            <FieldInput
                icon='road'
                isLoading={isLoading}
                name={ADDRESS_FIELDS.ROAD}
                label={ADDRESS_LABELS.ROAD}
                mask={(value) => maxLength(value, 255)}
            />
            <FieldInput
                icon='school'
                name={ADDRESS_FIELDS.NEIGHBORHOOD}
                label={ADDRESS_LABELS.NEIGHBORHOOD}
                mask={(value) => maxLength(value, 200)}
            />

            <FieldInput
                isLoading={isLoading}
                icon='sort-numeric-up'
                name={ADDRESS_FIELDS.NUMBER}
                label={ADDRESS_LABELS.NUMBER}
                mask={(value) => maxLength(value, 9)}
            />
            <FieldInput
                icon='map'
                isRequired={false}
                isLoading={isLoading}
                name={ADDRESS_FIELDS.COMPLEMENT}
                label={ADDRESS_LABELS.COMPLEMENT}
                mask={(value) => maxLength(value, 255)}
            />

            <StateField />
            <CityField />
        </Fragment>
    );
};

export default FieldsAddress;
