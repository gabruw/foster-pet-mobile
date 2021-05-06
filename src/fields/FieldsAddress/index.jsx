//#region Imports

import COLOR from 'assets/styles/color';
import FieldInput from 'components/FieldInput';
import React from 'react';
import { TextInput } from 'react-native-paper';
import useAddressContext from 'storages/address/context';
import { CityContextProvider } from 'storages/city/context';
import { StateContextProvider } from 'storages/state/context';
import ADDRESS_FIELD from 'utils/constants/field/address';
import ADDRESS_LABEL from 'utils/constants/label/address';
import CityField from './CityField';
import StateField from './StateField';

//#endregion

const { PURPLE } = COLOR.BACKGROUND;

const FieldsAddress = ({ control, errors, getValues }) => {
    const { fetchCep } = useAddressContext();

    return (
        <StateContextProvider>
            <CityContextProvider>
                <FieldInput
                    errors={errors}
                    control={control}
                    name={ADDRESS_FIELD.NAME}
                    label={ADDRESS_LABEL.NAME}
                    left={<TextInput.Icon name='map-marker' color={PURPLE} />}
                />
                <FieldInput
                    errors={errors}
                    control={control}
                    name={ADDRESS_FIELD.CEP}
                    label={ADDRESS_LABEL.CEP}
                    onBlur={() => fetchCep(getValues(ADDRESS_FIELD.CEP))}
                    left={<TextInput.Icon name='sign-direction' color={PURPLE} />}
                />
                <FieldInput
                    errors={errors}
                    control={control}
                    name={ADDRESS_FIELD.ROAD}
                    label={ADDRESS_LABEL.ROAD}
                    left={<TextInput.Icon name='road' color={PURPLE} />}
                />
                <FieldInput
                    errors={errors}
                    control={control}
                    name={ADDRESS_FIELD.NEIGHBORHOOD}
                    label={ADDRESS_LABEL.NEIGHBORHOOD}
                    left={<TextInput.Icon name='home-group' color={PURPLE} />}
                />
                <FieldInput
                    errors={errors}
                    control={control}
                    name={ADDRESS_FIELD.NUMBER}
                    label={ADDRESS_LABEL.NUMBER}
                    left={<TextInput.Icon name='numeric' color={PURPLE} />}
                />
                <FieldInput
                    multiline
                    errors={errors}
                    numberOfLines={3}
                    control={control}
                    name={ADDRESS_FIELD.COMPLEMENT}
                    label={ADDRESS_LABEL.COMPLEMENT}
                    left={<TextInput.Icon name='map' color={PURPLE} />}
                />

                <CityField errors={errors} control={control} getValues={getValues} />
                <StateField errors={errors} control={control} />
            </CityContextProvider>
        </StateContextProvider>
    );
};

export default FieldsAddress;
