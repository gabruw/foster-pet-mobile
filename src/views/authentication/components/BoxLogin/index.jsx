//#region Imports

import Logo from 'assets/images/logo.png';
import ButtonContained from 'components/ButtonContained';
import Margin from 'components/Margin';
import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import FormLogin from '../../forms/FormLogin';
import useStyles from './styles';

//#endregion

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
                <ButtonContained mode='outlined' backgoundColor='#FFFFFF' onPress={() => setIsLogin(false)} rounded>
                    Criar uma nova conta
                </ButtonContained>
            </View>
        </Margin>
    );
};

export default BoxLogin;
