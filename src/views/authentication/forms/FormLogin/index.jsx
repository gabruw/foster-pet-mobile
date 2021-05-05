//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import ButtonGroup from 'containers/ButtonGroup';
import React, { useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import useAuthenticationContext from 'storages/authentication/context';
import authenticationSchema from 'utils/validation/schemas/authentication';
import FieldsAuthentication from '../../fields/FieldsAuthentication';
import useStyles from './styles';
import LOGIN_BUTTON_GROUP from './utils/login-button-group';

//#endregion

const FormLogin = () => {
    const styles = useStyles();
    const buttonGroupRef = useRef(null);
    const { fetchLogin, isLoading } = useAuthenticationContext();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(authenticationSchema)
    });

    const onSubmit = useCallback(
        (data) => {
            data = { ...data, userType: buttonGroupRef.current.value };
            fetchLogin(data);
        },
        [buttonGroupRef, fetchLogin]
    );

    return (
        <View style={styles.container}>
            <FieldsAuthentication control={control} errors={errors} />

            <View style={styles.buttonGroup}>
                <ButtonGroup ref={buttonGroupRef} values={LOGIN_BUTTON_GROUP} />
            </View>

            <Button
                mode='contained'
                loading={isLoading}
                disabled={isLoading}
                style={styles.submit}
                contentStyle={styles.submit}
                onPress={handleSubmit(onSubmit)}
            >
                Entrar
            </Button>
        </View>
    );
};

export default FormLogin;
