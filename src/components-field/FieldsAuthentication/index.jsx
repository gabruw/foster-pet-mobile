//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';
import maxLength from 'utils/validations/masks/maxLength';

//#endregion

const FieldsAuthentication = ({ labelColor = '#000000' }) => (
    <Fragment>
        <FieldInput
            icon='envelope'
            labelColor={labelColor}
            name={AUTHENTICATION_FIELDS.EMAIL}
            label={AUTHENTICATION_LABELS.EMAIL}
            mask={(value) => maxLength(value, 80)}
        />
        <FieldInput
            isPassword
            icon='lock'
            labelColor={labelColor}
            name={AUTHENTICATION_FIELDS.PASSWORD}
            label={AUTHENTICATION_LABELS.PASSWORD}
            mask={(value) => maxLength(value, 40)}
        />
    </Fragment>
);

export default FieldsAuthentication;
