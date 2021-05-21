//#region Imports

import FieldInput from 'components/FieldInput';
import FieldDatePicker from 'containers/FieldDatePicker';
import React, { Fragment, useMemo } from 'react';
import PERSON_FIELDS from 'utils/constants/fields/person';
import PERSON_LABELS from 'utils/constants/labels/person';
import formatNamesAsObject from 'utils/functions/formatNamesAsObject';
import cell from 'utils/validations/masks/cell';
import cpf from 'utils/validations/masks/cpf';

//#endregion

const FieldsPerson = ({ inside = false }) => {
    const PERSON_NAME = useMemo(() => (inside ? formatNamesAsObject(PERSON_FIELDS) : PERSON_FIELDS), [inside]);

    return (
        <Fragment>
            <FieldInput icon='user' name={PERSON_NAME.NAME} label={PERSON_LABELS.NAME} />
            <FieldInput mask={cpf} icon='id-card' name={PERSON_NAME.CPF} label={PERSON_LABELS.CPF} />
            <FieldInput mask={cell} icon='mobile' name={PERSON_NAME.CELL} label={PERSON_LABELS.CELL} />
            <FieldDatePicker isRequired={false} name={PERSON_NAME.BIRTH_DATE} label={PERSON_LABELS.BIRTH_DATE} />
        </Fragment>
    );
};

export default FieldsPerson;
