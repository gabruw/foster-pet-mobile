//#region Imports

import Logo from 'assets/images/logo.png';
import GradientBackground from 'components/GradientBackground';
import React from 'react';
import { Image, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import LoginForm from './LoginForm';
import useStyles from './styles';

//#endregion

const Authentication = () => {
    const styles = useStyles();

    return (
        <GradientBackground>
            <View style={styles.topContent}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.title}>Foster Pet</Text>
            </View>

            <View style={styles.midContent}>
                <Text style={styles.text}>Login</Text>
                <Divider style={styles.divider} />
            </View>

            <View style={styles.bottomContent}>
                <LoginForm />

                <Text style={styles.withoutAccount}>
                    Não possuí uma conta? <Text style={styles.register}>Cadastre-se!</Text>
                </Text>
            </View>
        </GradientBackground>
    );
};

export default Authentication;
