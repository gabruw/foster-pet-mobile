//#region Imports

import COMPANY_FIELDS from 'utils/constants/fields/company';
import COMPANY_LABELS from 'utils/constants/labels/company';
import yup from '../yup';

//#endregion

const fields = {
    [COMPANY_FIELDS.CNPJ]: yup.string().required().min(14).max(14).label(COMPANY_LABELS.CNPJ),
    [COMPANY_FIELDS.NAME]: yup.string().required().min(1).max(200).label(COMPANY_LABELS.NAME),
    [COMPANY_FIELDS.FANTASY_NAME]: yup.string().required().min(1).max(200).label(COMPANY_LABELS.FANTASY_NAME)
};

export const companySchema = yup.object().shape(fields);

export const companyObjectSchema = yup.object().shape({
    [COMPANY_FIELDS.THIS]: yup.object().shape(fields)
});
