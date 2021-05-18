//#region Imports

import FieldInput from 'components/FieldInput';
import React from 'react';
import useAddressContext from 'storages/address/context';
import { CityContextProvider } from 'storages/city/context';
import { StateContextProvider } from 'storages/state/context';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import FieldCep from './CepField';
import CityField from './CityField';
import StateField from './StateField';

//#endregion

const FieldsAddress = () => {
    const { form, isLoading } = useAddressContext();

    const {
        control,
        formState: { errors }
    } = form;

    return (
        <StateContextProvider>
            <CityContextProvider>
                <FieldInput
                    errors={errors}
                    control={control}
                    icon='map-marker-alt'
                    name={ADDRESS_FIELDS.NAME}
                    label={ADDRESS_LABELS.NAME}
                />

                <FieldCep />

                <FieldInput
                    icon='road'
                    errors={errors}
                    control={control}
                    isLoading={isLoading}
                    name={ADDRESS_FIELDS.ROAD}
                    label={ADDRESS_LABELS.ROAD}
                />
                <FieldInput
                    icon='school'
                    errors={errors}
                    control={control}
                    name={ADDRESS_FIELDS.NEIGHBORHOOD}
                    label={ADDRESS_LABELS.NEIGHBORHOOD}
                />
                <FieldInput
                    errors={errors}
                    control={control}
                    isLoading={isLoading}
                    icon='sort-numeric-up'
                    name={ADDRESS_FIELDS.NUMBER}
                    label={ADDRESS_LABELS.NUMBER}
                />
                <FieldInput
                    icon='map'
                    errors={errors}
                    control={control}
                    isLoading={isLoading}
                    name={ADDRESS_FIELDS.COMPLEMENT}
                    label={ADDRESS_LABELS.COMPLEMENT}
                />

                <StateField />
                <CityField />
            </CityContextProvider>
        </StateContextProvider>
    );
};

export default FieldsAddress;
