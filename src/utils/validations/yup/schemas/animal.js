//#region Imports

import ANIMAL_FIELDS from 'utils/constants/fields/animal';
import ANIMAL_LABELS from 'utils/constants/labels/animal';

import yup from '../yup';

//#endregion

const animalSchema = yup.object().shape({
    [ANIMAL_FIELDS.NAME]: yup.string().required().max(200).label(ANIMAL_LABELS.NAME),
    [ANIMAL_FIELDS.GENDER]: yup.string().required().max(255).label(ANIMAL_LABELS.GENDER),
    [ANIMAL_FIELDS.AGE]: yup.number().min(1).label(ANIMAL_LABELS.AGE),
    [ANIMAL_FIELDS.WEIGHT]: yup.number().min(1).label(ANIMAL_LABELS.WEIGHT),
    [ANIMAL_FIELDS.COLOR]: yup.string().max(255).label(ANIMAL_LABELS.COLOR),
    [ANIMAL_FIELDS.ANIMALTYPE]: yup.string().required().min(1).max(100).label(ANIMAL_LABELS.ANIMALTYPE),
    [ANIMAL_FIELDS.BLOODTYPE]: yup.string().min(1).max(70).label(ANIMAL_LABELS.BLOODTYPE),
	[ANIMAL_FIELDS.CHIP]: yup.string().min(1).max(70).label(ANIMAL_LABELS.CHIP),
    [ANIMAL_FIELDS.SIZE]: yup.string().required().min(1).max(255).label(ANIMAL_LABELS.SIZE),
    [ANIMAL_FIELDS.IMG]: yup.string().min(0).label(ANIMAL_LABELS.IMG),
    [ANIMAL_FIELDS.STORY]: yup.string().label(ANIMAL_LABELS.STORY),
    [ANIMAL_FIELDS.SOCIABILITY]: yup.string().min(1).max(255).label(ANIMAL_LABELS.SOCIABILITY),
	[ANIMAL_FIELDS.TEMPERAMENT]: yup.string().min(1).max(70).label(ANIMAL_LABELS.TEMPERAMENT),
    [ANIMAL_FIELDS.HEALTH]: yup.string().min(1).max(255).label(ANIMAL_LABELS.HEALTH),
    [ANIMAL_FIELDS.BREED]: yup.string().required().min(1).max(100).label(ANIMAL_LABELS.BREED)
});

export default animalSchema;
