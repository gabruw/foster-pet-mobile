//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment, useMemo } from 'react';
import COMPANY_FIELD from 'utils/constants/field/company';
import COMPANY_LABEL from 'utils/constants/label/company';
import formatNamesAsObject from 'utils/function/formatNamesAsObject';

//#endregion

const FieldsCompany = ({ control, errors, inside = false }) => {
    const COMPANY_NAME = useMemo(() => (inside ? formatNamesAsObject(COMPANY_FIELD) : COMPANY_FIELD), [
        inside,
        COMPANY_FIELD
    ]);

    return (
        <Fragment>
            <FieldInput
                errors={errors}
                control={control}
                icon='building'
                name={COMPANY_NAME.NAME}
                label={COMPANY_LABEL.NAME}
            />
            <FieldInput
                errors={errors}
                icon='briefcase'
                control={control}
                name={COMPANY_NAME.FANTASY_NAME}
                label={COMPANY_LABEL.FANTASY_NAME}
            />
            <FieldInput
                icon='passport'
                errors={errors}
                control={control}
                name={COMPANY_NAME.CNPJ}
                label={COMPANY_LABEL.CNPJ}
            />
        </Fragment>
    );
};

export default FieldsCompany;
