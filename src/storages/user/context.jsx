//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import useCompanyContext, { CompanyContextProvider } from 'storages/company/context';
import usePersonContext, { PersonContextProvider } from 'storages/person/context';
import COMPANY_FIELDS from 'utils/constants/fields/company';
import PERSON_FIELDS from 'utils/constants/fields/person';
import USER_FIELDS from 'utils/constants/fields/user';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import { USER_TYPE_FIELDS, USER_TYPE_OPTIONS, USER_TYPE_VALUES } from 'utils/constants/types/user-type';
import isInvalid from 'utils/functions/isInvalid';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';
import { companyObjectSchema } from 'utils/validations/yup/schemas/company';
import { personObjectSchema } from 'utils/validations/yup/schemas/person';

//#endregion

const UserContext = createContext();

const initialState = {
    [USER_FIELDS.THIS]: null,
    [USER_FIELDS.FIELDS]: USER_TYPE_FIELDS,
    [USER_FIELDS.VALUES]: USER_TYPE_VALUES,
    [USER_FIELDS.OPTIONS]: USER_TYPE_OPTIONS,
    [USER_FIELDS.FORM]: USER_TYPE_VALUES.PERSON.value,
    ...CONTEXT_INITIAL_STATE
};

const UserContextProviderContent = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const { isLoading: personLoading, register: personRegister } = usePersonContext();
    const { isLoading: companyLoading, register: companyRegister } = useCompanyContext();

    const schema = useMemo(
        () =>
            ({
                PERSON: personObjectSchema.concat(authenticationSchema),
                COMPANY: companyObjectSchema.concat(authenticationSchema)
            }[state[USER_FIELDS.FORM]]),
        [authenticationSchema, personObjectSchema, companyObjectSchema]
    );

    useEffect(() => {
        setIsLoading(personLoading || companyLoading);
    }, [personLoading, companyLoading]);

    const setIsLoading = useCallback(
        (isLoading = false) =>
            setState((prevState) => ({
                ...prevState,
                isLoading: isInvalid(isLoading) ? !prevState.isLoading : isLoading
            })),
        [setState]
    );

    const setForm = useCallback((form = initialState.form) => setState((prevState) => ({ ...prevState, form })), [
        setState
    ]);

    const register = useCallback(
        async (form) => {
            if (form[PERSON_FIELDS.THIS]) {
                return personRegister(form);
            }

            if (form[COMPANY_FIELDS.THIS]) {
                return companyRegister(form);
            }
        },
        [personRegister, companyRegister]
    );

    return (
        <UserContext.Provider value={{ state, schema, setIsLoading, setForm, register }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserContextProvider = ({ children, personDefaultValues, companyDefaultValues, userDefaultValues }) => (
    <PersonContextProvider defaultValues={personDefaultValues}>
        <CompanyContextProvider defaultValues={companyDefaultValues}>
            <UserContextProviderContent defaultValues={userDefaultValues}>{children}</UserContextProviderContent>
        </CompanyContextProvider>
    </PersonContextProvider>
);

const useUserContext = () => {
    const { state, schema, setIsLoading, setForm, register } = useContext(UserContext);

    return { schema, setIsLoading, setForm, register, ...state };
};

export default useUserContext;
