//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import ButtonContained from 'components/ButtonContained';
import SubTitleDivider from 'components/SubTitleDivider';
import FieldsAuthentication from 'fields/FieldsAuthentication';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import useAuthenticationContext from 'storages/authentication/context';
import authenticationSchema from 'utils/validation/schemas/authentication';

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
        <View>
            <SubTitleDivider text='Login' />
            <FieldsAuthentication control={control} errors={errors} />

            <ButtonContained loading={isLoading} disabled={isLoading} onPress={handleSubmit(onSubmit)}>
                Entrar
            </ButtonContained>
        </View>
    );
};

export default FormLogin;
