//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment, useMemo } from 'react';
import AUTHENTICATION_FIELD from 'utils/constants/field/authentication';
import AUTHENTICATION_LABEL from 'utils/constants/label/authentication';

//#endregion

const FieldsAuthentication = ({ control, errors, hasContrast = false }) => {
    const labelColor = useMemo(() => (hasContrast ? '#FFFFFF' : '#000000'), [hasContrast]);

    return (
        <Fragment>
            <FieldInput
                icon='envelope'
                errors={errors}
                control={control}
                labelColor={labelColor}
                name={AUTHENTICATION_FIELD.EMAIL}
                label={AUTHENTICATION_LABEL.EMAIL}
            />
            <FieldInput
                isPassword
                icon='lock'
                errors={errors}
                control={control}
                labelColor={labelColor}
                name={AUTHENTICATION_FIELD.PASSWORD}
                label={AUTHENTICATION_LABEL.PASSWORD}
            />
        </Fragment>
    );
};

export default FieldsAuthentication;
