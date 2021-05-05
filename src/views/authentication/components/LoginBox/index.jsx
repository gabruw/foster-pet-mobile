//#region Imports

import Logo from 'assets/images/logo.png';
import SnackbarError from 'containers/SnackbarError';
import React from 'react';
import { Image, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import useAuthenticationContext from 'storages/authentication/context';
import FormLogin from '../../forms/FormLogin';
import useStyles from './styles';

//#endregion

const LoginBox = () => {
    const styles = useStyles();
    const { error } = useAuthenticationContext();

    return (
        <View>
            <View style={styles.topContent}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.title}>Foster Pet</Text>
            </View>

            <View style={styles.midContent}>
                <Text style={styles.text}>Login</Text>
                <Divider style={styles.divider} />
            </View>

            <View style={styles.bottomContent}>
                <FormLogin />

                <Text style={styles.withoutAccount}>
                    Não possuí uma conta? <Text style={styles.register}>Cadastre-se!</Text>
                </Text>
            </View>

            <SnackbarError errors={error} />
        </View>
    );
};

export default LoginBox;
