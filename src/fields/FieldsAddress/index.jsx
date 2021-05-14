//#region Imports

import FieldInput from 'components/FieldInput';
import React from 'react';
import useAddressContext from 'storages/address/context';
import { CityContextProvider } from 'storages/city/context';
import { StateContextProvider } from 'storages/state/context';
import ADDRESS_FIELD from 'utils/constants/field/address';
import ADDRESS_LABEL from 'utils/constants/label/address';
import FieldCep from './CepField';
import CityField from './CityField';
import StateField from './StateField';

//#endregion

const FieldsAddress = ({ control, errors, getValues }) => {
    const { isLoading } = useAddressContext();

    return (
        <StateContextProvider>
            <CityContextProvider>
                <FieldInput
                    errors={errors}
                    control={control}
                    icon='map-marker-alt'
                    name={ADDRESS_FIELD.NAME}
                    label={ADDRESS_LABEL.NAME}
                />

                <FieldCep errors={errors} control={control} getValues={getValues} />

                <FieldInput
                    icon='road'
                    errors={errors}
                    control={control}
                    isLoading={isLoading}
                    name={ADDRESS_FIELD.ROAD}
                    label={ADDRESS_LABEL.ROAD}
                />
                <FieldInput
                    icon='school'
                    errors={errors}
                    control={control}
                    name={ADDRESS_FIELD.NEIGHBORHOOD}
                    label={ADDRESS_LABEL.NEIGHBORHOOD}
                />
                <FieldInput
                    errors={errors}
                    control={control}
                    isLoading={isLoading}
                    icon='sort-numeric-up'
                    name={ADDRESS_FIELD.NUMBER}
                    label={ADDRESS_LABEL.NUMBER}
                />
                <FieldInput
                    icon='map'
                    errors={errors}
                    control={control}
                    isLoading={isLoading}
                    name={ADDRESS_FIELD.COMPLEMENT}
                    label={ADDRESS_LABEL.COMPLEMENT}
                />

                <CityField errors={errors} control={control} getValues={getValues} />
                <StateField errors={errors} control={control} />
            </CityContextProvider>
        </StateContextProvider>
    );
};

export default FieldsAddress;
