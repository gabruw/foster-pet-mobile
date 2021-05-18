//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment, useMemo } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';

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
                name={AUTHENTICATION_FIELDS.EMAIL}
                label={AUTHENTICATION_LABELS.EMAIL}
            />
            <FieldInput
                isPassword
                icon='lock'
                errors={errors}
                control={control}
                labelColor={labelColor}
                name={AUTHENTICATION_FIELDS.PASSWORD}
                label={AUTHENTICATION_LABELS.PASSWORD}
            />
        </Fragment>
    );
};

export default FieldsAuthentication;
