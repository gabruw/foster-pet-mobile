//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import ButtonGroup from 'containers/ButtonGroup';
import StyledInput from 'components/StyledInput';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import useAuthenticationContext from 'storages/authentication/context';
import AUTHENTICATION_FIELD from 'utils/constants/field/authentication';
import AUTHENTICATION_LABEL from 'utils/constants/label/authentication';
import authenticationSchema from 'utils/validation/schemas/login';
import useStyles from './styles';
import LOGIN_BUTTON_GROUP from './utils/login-button-group';
import COLOR from 'assets/styles/color';

//#endregion

const { PURPLE } = COLOR.BACKGROUND;

const LoginForm = () => {
    const styles = useStyles();
    const { login } = useAuthenticationContext();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {},
        reValidateMode: 'onBlur',
        resolver: yupResolver(authenticationSchema)
    });

    const onSubmit = useCallback(
        (data) => {
            console.log('data', data);
            login(data);
        },
        [login]
    );

    return (
        <View style={styles.container}>
            <StyledInput
                errors={errors}
                control={control}
                name={AUTHENTICATION_FIELD.EMAIL}
                label={AUTHENTICATION_LABEL.EMAIL}
                left={<TextInput.Icon name='email' color={PURPLE} />}
            />
            <StyledInput
                errors={errors}
                control={control}
                secureTextEntry={true}
                name={AUTHENTICATION_FIELD.PASSWORD}
                label={AUTHENTICATION_LABEL.PASSWORD}
                left={<TextInput.Icon name='lock' color={PURPLE} />}
            />

            <View style={styles.buttonGroup}>
                <ButtonGroup values={LOGIN_BUTTON_GROUP} />
            </View>

            <Button
                mode='contained'
                style={styles.submit}
                contentStyle={styles.submit}
                onPress={handleSubmit(onSubmit)}
            >
                Entrar
            </Button>
        </View>
    );
};

export default LoginForm;
