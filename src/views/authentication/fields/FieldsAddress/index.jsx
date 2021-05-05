//#region Imports

import COLOR from 'assets/styles/color';
import StyledInput from 'components/StyledInput';
import StyledPicker from 'containers/StyledPicker';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import useAddressContext from 'storages/address/context';
import ADDRESS_FIELD from 'utils/constants/field/address';
import CITY_FIELD from 'utils/constants/field/city';
import STATE_FIELD from 'utils/constants/field/state';
import ADDRESS_LABEL from 'utils/constants/label/address';
import CITY_LABEL from 'utils/constants/label/city';
import STATE_LABEL from 'utils/constants/label/state';

//#endregion

const { PURPLE } = COLOR.BACKGROUND;

const FieldsAddress = ({ control, errors, getValues }) => {
    const { fetchCep } = useAddressContext();

    return (
        <View>
            <StyledInput
                errors={errors}
                control={control}
                name={ADDRESS_FIELD.NAME}
                label={ADDRESS_LABEL.NAME}
                left={<TextInput.Icon name='map-marker' color={PURPLE} />}
            />
            <StyledInput
                errors={errors}
                control={control}
                name={ADDRESS_FIELD.CEP}
                label={ADDRESS_LABEL.CEP}
                onBlur={() => fetchCep(getValues(ADDRESS_FIELD.CEP))}
                left={<TextInput.Icon name='sign-direction' color={PURPLE} />}
            />
            {/* <StyledInput
                errors={errors}
                control={control}
                name={ADDRESS_FIELD.ROAD}
                label={ADDRESS_LABEL.ROAD}
                left={<TextInput.Icon name='road' color={PURPLE} />}
            />
            <StyledInput
                errors={errors}
                control={control}
                name={ADDRESS_FIELD.NEIGHBORHOOD}
                label={ADDRESS_LABEL.NEIGHBORHOOD}
                left={<TextInput.Icon name='home-group' color={PURPLE} />}
            />
            <StyledInput
                errors={errors}
                control={control}
                name={ADDRESS_FIELD.NUMBER}
                label={ADDRESS_LABEL.NUMBER}
                left={<TextInput.Icon name='numeric' color={PURPLE} />}
            />
            <StyledInput
                multiline
                errors={errors}
                numberOfLines={3}
                control={control}
                name={ADDRESS_FIELD.COMPLEMENT}
                label={ADDRESS_LABEL.COMPLEMENT}
                left={<TextInput.Icon name='map' color={PURPLE} />}
            /> */}
            <StyledPicker errors={errors} name={CITY_FIELD.THIS} label={CITY_LABEL.NAME} control={control} />
            <StyledPicker errors={errors} name={STATE_FIELD.THIS} label={STATE_LABEL.NAME} control={control} />
        </View>
    );
};

export default FieldsAddress;
