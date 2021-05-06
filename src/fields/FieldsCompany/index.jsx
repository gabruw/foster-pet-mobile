//#region Imports

import COLOR from 'assets/styles/color';
import FieldInput from 'components/FieldInput';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import COMPANY_FIELD from 'utils/constants/field/company';
import COMPANY_LABEL from 'utils/constants/label/company';

//#endregion

const { PURPLE } = COLOR.BACKGROUND;

const FieldsCompany = ({ control, errors }) => (
    <View>
        <FieldInput
            errors={errors}
            control={control}
            name={COMPANY_FIELD.NAME}
            label={COMPANY_LABEL.NAME}
            left={<TextInput.Icon name='office-building' color={PURPLE} />}
        />
        <FieldInput
            errors={errors}
            control={control}
            name={COMPANY_FIELD.FANTASY_NAME}
            label={COMPANY_LABEL.FANTASY_NAME}
            left={<TextInput.Icon name='briefcase' color={PURPLE} />}
        />
        <FieldInput
            errors={errors}
            control={control}
            name={COMPANY_FIELD.CNPJ}
            label={COMPANY_LABEL.CNPJ}
            left={<TextInput.Icon name='counter' color={PURPLE} />}
        />
    </View>
);

export default FieldsCompany;
