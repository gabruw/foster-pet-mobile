//#region Imports

import COLOR from 'assets/styles/color';
import StyledInput from 'components/StyledInput';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import AUTHENTICATION_FIELD from 'utils/constants/field/authentication';
import AUTHENTICATION_LABEL from 'utils/constants/label/authentication';

//#endregion

const { PURPLE } = COLOR.BACKGROUND;

const FieldsAuthentication = ({ control, errors }) => (
    <View>
        <StyledInput
            errors={errors}
            control={control}
            name={AUTHENTICATION_FIELD.EMAIL}
            label={AUTHENTICATION_LABEL.EMAIL}
            left={<TextInput.Icon name='email' color={PURPLE} />}
        />
        <StyledInput
            errors={errors}
            control={control}
            secureTextEntry={true}
            name={AUTHENTICATION_FIELD.PASSWORD}
            label={AUTHENTICATION_LABEL.PASSWORD}
            left={<TextInput.Icon name='lock' color={PURPLE} />}
        />
    </View>
);

export default FieldsAuthentication;
