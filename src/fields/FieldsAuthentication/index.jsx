//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment } from 'react';
import AUTHENTICATION_FIELD from 'utils/constants/field/authentication';
import AUTHENTICATION_LABEL from 'utils/constants/label/authentication';

//#endregion

const FieldsAuthentication = ({ control, errors }) => (
    <Fragment>
        <FieldInput
            icon='email'
            errors={errors}
            control={control}
            name={AUTHENTICATION_FIELD.EMAIL}
            label={AUTHENTICATION_LABEL.EMAIL}
        />
        <FieldInput
            icon='lock'
            errors={errors}
            control={control}
            secureTextEntry={true}
            name={AUTHENTICATION_FIELD.PASSWORD}
            label={AUTHENTICATION_LABEL.PASSWORD}
        />
    </Fragment>
);

export default FieldsAuthentication;
