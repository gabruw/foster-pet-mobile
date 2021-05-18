//#region Imports

import FieldsCompany from 'components-field/FieldsCompany';
import FieldsPerson from 'components-field/FieldsPerson';
import { useMemo } from 'react';
import useCompanyContext from 'storages/company/context';
import usePersonContext from 'storages/person/context';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';
import { companyObjectSchema } from 'utils/validations/yup/schemas/company';
import { personObjectSchema } from 'utils/validations/yup/schemas/person';

//#endregion

const useUserType = () => {
    const { isLoading: personLoading } = usePersonContext();
    const { isLoading: companyLoading } = useCompanyContext();

    const values = useMemo(
        {
            PERSON: {
                text: 'Pessoa',
                value: 'PERSON'
            },
            COMPANY: {
                text: 'Empresa',
                value: 'COMPANY'
            }
        },
        []
    );

    const options = useMemo(() => Object.values(values), [values]);

    const fields = useMemo(
        () => ({
            PERSON: {
                component: FieldsPerson,
                ...values.PERSON
            },
            COMPANY: {
                component: FieldsCompany,
                ...values.COMPANY
            }
        }),
        [values]
    );

    const schema = useMemo(
        () => ({
            PERSON: personObjectSchema.concat(authenticationSchema),
            COMPANY: companyObjectSchema.concat(authenticationSchema)
        }),
        [authenticationSchema, personObjectSchema]
    );

    const isLoading = useMemo(() => personLoading || companyLoading, [personLoading, companyLoading]);

    return {
        schema,
        values,
        fields,
        options,
        isLoading
    };
};

export default useUserType;
