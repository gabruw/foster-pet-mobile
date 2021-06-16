//#region Imports

import FieldsAuthentication from 'components-field/FieldsAuthentication';
import Button from 'components/Button';
import SubTitleDivider from 'components/SubTitleDivider';
import React, { Fragment, useCallback } from 'react';
import useAuthenticationContext from 'storages/authentication/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';

//#endregion

const FormContent = () => {
    const { setScreen } = useSystemContext();
    const { handleSubmit } = useFormContext();
    const { isLoading, fetchLogin } = useAuthenticationContext();

    const onSubmit = useCallback(
        (data) => {
            fetchLogin(data);
            setScreen('Animal');
        },
        [fetchLogin]
    );

    return (
        <Fragment>
            <SubTitleDivider text='Login' />
            <FieldsAuthentication labelColor='#FFFFFF' />

            <Button loading={isLoading} disabled={isLoading} onPress={handleSubmit(onSubmit)}>
                Entrar
            </Button>
        </Fragment>
    );
};

const FormLogin = () => (
    <FormContextProvider schema={authenticationSchema}>
        <FormContent />
    </FormContextProvider>
);

export default FormLogin;
