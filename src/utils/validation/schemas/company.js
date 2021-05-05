//#region Imports

import PERSON_FIELD from 'utils/constants/field/person';
import PERSON_LABEL from 'utils/constants/label/person';
import yup from '../yup';

//#endregion

const personSchema = yup.object().shape({
    [PERSON_FIELD.CELL]: yup.string().required().min(9).max(9).label(PERSON_LABEL.CELL),
    [PERSON_FIELD.CPF]: yup.string().required().min(11).max(11).label(PERSON_LABEL.CPF),
    [PERSON_FIELD.NAME]: yup.string().required().min(1).max(200).label(PERSON_LABEL.NAME)
});

export default personSchema;
