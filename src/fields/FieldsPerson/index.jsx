//#region Imports

import COLOR from 'assets/styles/color';
import FieldInput from 'components/FieldInput';
import FieldDatePicker from 'containers/FieldDatePicker';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import PERSON_FIELD from 'utils/constants/field/person';
import PERSON_LABEL from 'utils/constants/label/person';

//#endregion

const { PURPLE } = COLOR.BACKGROUND;

const FieldsPerson = ({ control, errors, setValue }) => (
    <View>
        <FieldInput
            errors={errors}
            control={control}
            name={PERSON_FIELD.NAME}
            label={PERSON_LABEL.NAME}
            left={<TextInput.Icon name='account-box' color={PURPLE} />}
        />
        <FieldInput
            errors={errors}
            control={control}
            name={PERSON_FIELD.CPF}
            label={PERSON_LABEL.CPF}
            left={<TextInput.Icon name='card-account-details-outline' color={PURPLE} />}
        />
        <FieldInput
            errors={errors}
            control={control}
            name={PERSON_FIELD.CELL}
            label={PERSON_LABEL.CELL}
            left={<TextInput.Icon name='cellphone' color={PURPLE} />}
        />
        <FieldDatePicker
            errors={errors}
            control={control}
            setValue={setValue}
            name={PERSON_FIELD.BIRTH_DATE}
            label={PERSON_LABEL.BIRTH_DATE}
        />
    </View>
);

export default FieldsPerson;
