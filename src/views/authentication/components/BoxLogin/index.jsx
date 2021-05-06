//#region Imports

import Logo from 'assets/images/logo.png';
import ButtonContained from 'components/ButtonContained';
import React, { Fragment } from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import FormLogin from '../../forms/FormLogin';
import useStyles from './styles';

//#endregion

const BoxLogin = ({ changeForm }) => {
    const styles = useStyles();

    return (
        <Fragment>
            <View style={styles.top}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.title}>Foster Pet</Text>
            </View>

            <FormLogin />

            <View style={styles.bottom}>
                <ButtonContained mode='outlined' backgoundColor='#FFFFFF' onPress={() => changeForm(false)} rounded>
                    Criar uma nova conta
                </ButtonContained>
            </View>
        </Fragment>
    );
};

export default BoxLogin;
