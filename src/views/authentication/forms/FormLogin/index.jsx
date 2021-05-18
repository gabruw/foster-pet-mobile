//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import FieldsAuthentication from 'components-field/FieldsAuthentication';
import Button from 'components/Button';
import SubTitleDivider from 'components/SubTitleDivider';
import React, { Fragment, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import useAuthenticationContext from 'storages/authentication/context';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';

//#endregion

const FormLogin = () => {
    const { fetchLogin, isLoading } = useAuthenticationContext();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(authenticationSchema)
    });

    const onSubmit = useCallback((data) => fetchLogin(data), [fetchLogin]);

    return (
        <Fragment>
            <SubTitleDivider text='Login' />
            <FieldsAuthentication control={control} errors={errors} hasContrast />

            <Button loading={isLoading} disabled={isLoading} onPress={handleSubmit(onSubmit)}>
                Entrar
            </Button>
        </Fragment>
    );
};

export default FormLogin;
