//#region Imports

import FieldInput from 'components/FieldInput';
import FieldDatePicker from 'containers/FieldDatePicker';
import React, { Fragment, useMemo } from 'react';
import PERSON_FIELD from 'utils/constants/field/person';
import PERSON_LABEL from 'utils/constants/label/person';
import formatNamesAsObject from 'utils/function/formatNamesAsObject';

//#endregion

const FieldsPerson = ({ control, errors, setValue, inside = false }) => {
    const PERSON_NAME = useMemo(() => (inside ? formatNamesAsObject(PERSON_FIELD) : PERSON_FIELD), [
        inside,
        PERSON_FIELD
    ]);

    return (
        <Fragment>
            <FieldInput
                errors={errors}
                control={control}
                icon='account-box'
                name={PERSON_NAME.NAME}
                label={PERSON_LABEL.NAME}
            />
            <FieldInput
                errors={errors}
                control={control}
                name={PERSON_NAME.CPF}
                label={PERSON_LABEL.CPF}
                icon='card-account-details-outline'
            />
            <FieldInput
                errors={errors}
                icon='cellphone'
                control={control}
                name={PERSON_NAME.CELL}
                label={PERSON_LABEL.CELL}
            />
            <FieldDatePicker
                errors={errors}
                control={control}
                setValue={setValue}
                name={PERSON_NAME.BIRTH_DATE}
                label={PERSON_LABEL.BIRTH_DATE}
            />
        </Fragment>
    );
};

export default FieldsPerson;
