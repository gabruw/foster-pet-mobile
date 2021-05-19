//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';

//#endregion

const FieldsAuthentication = ({ labelColor = '#000000' }) => (
    <Fragment>
        <FieldInput
            icon='envelope'
            labelColor={labelColor}
            name={AUTHENTICATION_FIELDS.EMAIL}
            label={AUTHENTICATION_LABELS.EMAIL}
        />
        <FieldInput
            isPassword
            icon='lock'
            labelColor={labelColor}
            name={AUTHENTICATION_FIELDS.PASSWORD}
            label={AUTHENTICATION_LABELS.PASSWORD}
        />
    </Fragment>
);

export default FieldsAuthentication;
