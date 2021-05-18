//#region Imports

import AUTHETICATION_FIELD from 'utils/constants/fields/authentication';
import AUTHETICATION_LABEL from 'utils/constants/labels/authentication';
import yup from '../yup';

//#endregion

const authenticationSchema = yup.object().shape({
    [AUTHETICATION_FIELD.PASSWORD]: yup.string().required().min(8).max(40).label(AUTHETICATION_LABEL.PASSWORD),
    [AUTHETICATION_FIELD.EMAIL]: yup.string().email().required().min(6).max(80).label(AUTHETICATION_LABEL.EMAIL)
});

export default authenticationSchema;
