//#region Imports

import { NavigationContainer } from '@react-navigation/native';
import SplashLoader from 'containers/SplashLoader';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useSystemContext, { SystemContextProvider } from 'storages/system/context';
import Animal from 'views/animals';
import Authentication from 'views/authentication';

//#endregion

const Content = () => {
    const { screen } = useSystemContext();

    return (
        <SplashLoader>
            {screen === 'Animal' && <Animal />}
            {screen === 'Authentication' && <Authentication />}
        </SplashLoader>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <SystemContextProvider>
                    <Content />
                </SystemContextProvider>
            </SafeAreaProvider>
        </NavigationContainer>
    );
};

export default App;
