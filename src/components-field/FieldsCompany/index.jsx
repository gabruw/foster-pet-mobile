//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment, useMemo } from 'react';
import COMPANY_FIELDS from 'utils/constants/fields/company';
import COMPANY_LABELS from 'utils/constants/labels/company';
import formatNamesAsObject from 'utils/functions/formatNamesAsObject';

//#endregion

const FieldsCompany = ({ control, errors, inside = false }) => {
    const COMPANY_NAME = useMemo(() => (inside ? formatNamesAsObject(COMPANY_FIELDS) : COMPANY_FIELDS), [
        inside,
        COMPANY_FIELDS
    ]);

    return (
        <Fragment>
            <FieldInput
                errors={errors}
                control={control}
                icon='building'
                name={COMPANY_NAME.NAME}
                label={COMPANY_LABELS.NAME}
            />
            <FieldInput
                errors={errors}
                icon='briefcase'
                control={control}
                name={COMPANY_NAME.FANTASY_NAME}
                label={COMPANY_LABELS.FANTASY_NAME}
            />
            <FieldInput
                icon='passport'
                errors={errors}
                control={control}
                name={COMPANY_NAME.CNPJ}
                label={COMPANY_LABELS.CNPJ}
            />
        </Fragment>
    );
};

export default FieldsCompany;
