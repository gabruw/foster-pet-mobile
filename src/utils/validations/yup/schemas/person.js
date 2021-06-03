//#region Imports

import PERSON_FIELDS from 'utils/constants/fields/person';
import PERSON_LABELS from 'utils/constants/labels/person';
import yup from '../yup';

//#endregion

const fields = {
    [PERSON_FIELDS.CPF]: yup.string().required().min(14).max(14).label(PERSON_LABELS.CPF),
    [PERSON_FIELDS.CELL]: yup.string().required().min(16).max(16).label(PERSON_LABELS.CELL),
    [PERSON_FIELDS.NAME]: yup.string().required().min(1).max(200).label(PERSON_LABELS.NAME)
};

export const personSchema = yup.object().shape(fields);

export const personObjectSchema = yup.object().shape({
    [PERSON_FIELDS.THIS]: yup.object().shape(fields)
});
