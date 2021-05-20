//#region Imports

import Logo from 'components-svg/Logo';
import GradientBackground from 'components/GradientBackground';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const AppLoader = () => {
    const styles = useStyles();

    return (
        <GradientBackground>
            <View style={styles.container}>
                <Logo width={80} height={100} />
                <Text style={styles.title}>Foster Pet</Text>

                <ActivityIndicator size='large' color='#FFFFFF' />
            </View>
        </GradientBackground>
    );
};

export default AppLoader;
