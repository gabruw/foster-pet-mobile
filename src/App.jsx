//#region Imports

import useGlobalStyles from 'assets/styles/global';
import StartAppLoader from 'containers/StartAppLoader';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthenticationContextProvider } from 'storages/authentication/context';
import AppRoutes from './AppRoutes';

//#endregion

const App = () => {
    const styles = useGlobalStyles();

    return (
        <SafeAreaProvider>
            <StartAppLoader>
                <View style={styles.view}>
                    <AuthenticationContextProvider>
                        <AppRoutes />
                    </AuthenticationContextProvider>
                </View>
            </StartAppLoader>
        </SafeAreaProvider>
    );
};

export default App;
