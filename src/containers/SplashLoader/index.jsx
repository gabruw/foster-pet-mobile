//#region Imports

import GeomanistBold from 'assets/fonts/Geomanist-Bold.ttf';
import GeomanistMedium from 'assets/fonts/Geomanist-Medium.ttf';
import Geomanist from 'assets/fonts/Geomanist-Regular.ttf';
import AppLoader from 'components/AppLoader';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import useStyles from './styles';

//#endregion

const SplashLoader = ({ children }) => {
    const styles = useStyles();
    const [isLoading, setIsLoading] = useState(true);

    const fonts = async () => {
        await Font.loadAsync({
            Geomanist,
            'Geomanist-Bold': GeomanistBold,
            'Geomanist-Medium': GeomanistMedium
        });
    };

    useEffect(() => {
        (async () => {
            await fonts();
            setIsLoading(false);
        })();
    }, []);

    return <View style={styles.view}>{!isLoading ? children : <AppLoader />}</View>;
};

export default SplashLoader;
