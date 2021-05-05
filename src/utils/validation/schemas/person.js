//#region Imports

import COMPANY_FIELD from 'utils/constants/field/company';
import COMPANY_LABEL from 'utils/constants/label/company';
import yup from '../yup';

//#endregion

const companySchema = yup.object().shape({
    [COMPANY_FIELD.CNPJ]: yup.string().required().min(14).max(14).label(COMPANY_LABEL.CNPJ),
    [COMPANY_FIELD.NAME]: yup.string().required().min(1).max(200).label(COMPANY_LABEL.NAME),
    [COMPANY_FIELD.FANTASY_NAME]: yup.string().required().min(1).max(200).label(COMPANY_LABEL.FANTASY_NAME)
});

export default companySchema;
