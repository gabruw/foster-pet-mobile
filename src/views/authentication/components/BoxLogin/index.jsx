//#region Imports

import COLOR from 'assets/styles/color';
import Logo from 'components-svg/Logo';
import Button from 'components/Button';
import Margin from 'components/Margin';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import useAuthenticationContext from 'storages/authentication/context';
import FormLogin from 'views/authentication/forms/FormLogin';
import useStyles from './styles';

//#endregion

const { LIGHT } = COLOR.BLUE.PRIMARY;

const BoxLogin = () => {
    const styles = useStyles();
    const { setIsLogin } = useAuthenticationContext();

    return (
        <Margin paddingTop={5}>
            <View style={styles.top}>
                <Logo width={80} height={100} />
                <Text style={styles.title}>Foster Pet</Text>
            </View>

            <FormLogin />

            <View style={styles.bottom}>
                <Button
                    invert
                    fontSize={14}
                    type='outline'
                    loaderColor={LIGHT}
                    backgoundColor={LIGHT}
                    onPress={() => setIsLogin(false)}
                >
                    Criar uma nova conta
                </Button>
            </View>
        </Margin>
    );
};

export default BoxLogin;
