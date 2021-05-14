//#region Imports

import GeomanistBold from 'assets/fonts/Geomanist-Bold.ttf';
import GeomanistLight from 'assets/fonts/Geomanist-Light.ttf';
import GeomanistMedium from 'assets/fonts/Geomanist-Medium.ttf';
import GeomanistThin from 'assets/fonts/Geomanist-Thin.ttf';
import AppLoader from 'components/AppLoader';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';

//#endregion

const StartAppLoader = ({ children }) => {
    const [loader, setLoader] = useState(false);

    const fetch = async () => {
        await Font.loadAsync({
            'Geomanist-Thin': GeomanistThin,
            'Geomanist-Bold': GeomanistBold,
            'Geomanist-Light': GeomanistLight,
            'Geomanist-Medium': GeomanistMedium
        });

        setLoader(true);
    };

    useEffect(() => {
        fetch();
    }, []);

    return loader ? children : <AppLoader />;
};

export default StartAppLoader;
