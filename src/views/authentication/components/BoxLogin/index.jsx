//#region Imports

import Logo from 'assets/images/logo.png';
import SubTitleDivider from 'components/SubTitleDivider';
import SnackbarError from 'containers/SnackbarError';
import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import useAuthenticationContext from 'storages/authentication/context';
import FormLogin from '../../forms/FormLogin';
import useStyles from './styles';

//#endregion

const BoxLogin = ({ changeForm }) => {
    const styles = useStyles();
    const { error } = useAuthenticationContext();

    return (
        <View>
            <View style={styles.topContent}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.title}>Foster Pet</Text>
            </View>

            <SubTitleDivider text='Login' />

            <View style={styles.bottomContent}>
                <FormLogin />

                <View style={styles.content}>
                    <Text style={styles.withoutAccount}>
                        Não possuí uma conta?
                        <Text style={styles.register} onPress={() => changeForm(false)}>
                            Cadastre-se!
                        </Text>
                    </Text>
                </View>
            </View>

            <SnackbarError errors={error} />
        </View>
    );
};

export default BoxLogin;
