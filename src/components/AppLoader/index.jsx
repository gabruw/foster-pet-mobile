//#region Imports

import Logo from 'assets/images/logo.png';
import GradientBackground from 'components/GradientBackground';
import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';

//#endregion

const AppLoader = () => {
    const styles = useStyles();

    return (
        <GradientBackground>
            <View style={styles.container}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.title}>Foster Pet</Text>

                <ActivityIndicator size='large' color='#FFFFFF' />
            </View>
        </GradientBackground>
    );
};

export default AppLoader;
