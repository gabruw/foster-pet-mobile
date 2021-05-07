//#region Imports

import ADDRESS_FIELD from 'utils/constants/field/address';
import ADDRESS_LABEL from 'utils/constants/label/address';
import yup from '../yup';

//#endregion

const addressSchema = yup.object().shape({
    [ADDRESS_FIELD.COMPLEMENT]: yup.string().max(255).label(ADDRESS_LABEL.COMPLEMENT),
    [ADDRESS_FIELD.CEP]: yup.string().required().min(9).max(9).label(ADDRESS_LABEL.CEP),
    [ADDRESS_FIELD.NAME]: yup.string().required().min(1).max(70).label(ADDRESS_LABEL.NAME),
    [ADDRESS_FIELD.ROAD]: yup.string().required().min(1).max(255).label(ADDRESS_LABEL.ROAD),
    [ADDRESS_FIELD.PHONE]: yup.string().required().min(13).max(13).label(ADDRESS_LABEL.PHONE),
    [ADDRESS_FIELD.NUMBER]: yup.number().required().min(9).max(9).label(ADDRESS_LABEL.NUMBER),
    [ADDRESS_FIELD.NEIGHBORHOOD]: yup.string().required().min(1).max(255).label(ADDRESS_LABEL.NEIGHBORHOOD)
});

export default addressSchema;
