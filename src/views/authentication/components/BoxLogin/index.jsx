//#region Imports

import Logo from 'assets/images/logo.png';
import COLOR from 'assets/styles/color';
import Button from 'components/Button';
import Margin from 'components/Margin';
import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import FormLogin from '../../forms/FormLogin';
import useStyles from './styles';

//#endregion

const { LIGHT } = COLOR.BLUE.PRIMARY;

const BoxLogin = ({ setIsLogin }) => {
    const styles = useStyles();

    return (
        <Margin>
            <View style={styles.top}>
                <Image source={Logo} style={styles.logo} />
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
