//#region Imports

import FieldInput from 'containers/FieldInput';
import React, { Fragment, useMemo } from 'react';
import COMPANY_FIELDS from 'utils/constants/fields/company';
import COMPANY_LABELS from 'utils/constants/labels/company';
import formatNamesAsObject from 'utils/functions/formatNamesAsObject';
import cnpj from 'utils/validations/masks/cnpj';
import maxLength from 'utils/validations/masks/maxLength';

//#endregion

const FieldsCompany = ({ inside = false }) => {
    const COMPANY_NAME = useMemo(() => (inside ? formatNamesAsObject(COMPANY_FIELDS) : COMPANY_FIELDS), [inside]);

    return (
        <Fragment>
            <FieldInput
                icon='building'
                name={COMPANY_NAME.NAME}
                label={COMPANY_LABELS.NAME}
                mask={(value) => maxLength(value, 200)}
            />
            <FieldInput
                icon='briefcase'
                name={COMPANY_NAME.FANTASY_NAME}
                label={COMPANY_LABELS.FANTASY_NAME}
                mask={(value) => maxLength(value, 200)}
            />

            <FieldInput mask={cnpj} icon='passport' name={COMPANY_NAME.CNPJ} label={COMPANY_LABELS.CNPJ} />
        </Fragment>
    );
};

export default FieldsCompany;
