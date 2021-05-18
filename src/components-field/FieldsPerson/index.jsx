//#region Imports

import FieldInput from 'components/FieldInput';
import FieldDatePicker from 'containers/FieldDatePicker';
import React, { Fragment, useMemo } from 'react';
import PERSON_FIELDS from 'utils/constants/fields/person';
import PERSON_LABELS from 'utils/constants/labels/person';
import formatNamesAsObject from 'utils/functions/formatNamesAsObject';

//#endregion

const FieldsPerson = ({ control, errors, setValue, inside = false }) => {
    const PERSON_NAME = useMemo(() => (inside ? formatNamesAsObject(PERSON_FIELDS) : PERSON_FIELDS), [
        inside,
        PERSON_FIELDS
    ]);

    return (
        <Fragment>
            <FieldInput
                icon='user'
                errors={errors}
                control={control}
                name={PERSON_NAME.NAME}
                label={PERSON_LABELS.NAME}
            />
            <FieldInput
                icon='id-card'
                errors={errors}
                control={control}
                name={PERSON_NAME.CPF}
                label={PERSON_LABELS.CPF}
            />
            <FieldInput
                icon='mobile'
                errors={errors}
                control={control}
                name={PERSON_NAME.CELL}
                label={PERSON_LABELS.CELL}
            />
            <FieldDatePicker
                errors={errors}
                control={control}
                setValue={setValue}
                name={PERSON_NAME.BIRTH_DATE}
                label={PERSON_LABELS.BIRTH_DATE}
            />
        </Fragment>
    );
};

export default FieldsPerson;
