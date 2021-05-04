//#region Imports

import useGlobalStyles from 'assets/styles/global';
import StartAppLoader from 'containers/StartAppLoader';
import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthenticationContextProvider } from 'storages/authentication/context';
import THEME from 'utils/constants/theme';
import AppRoutes from './AppRoutes';

//#endregion

const App = () => {
    const styles = useGlobalStyles();

    return (
        <StartAppLoader>
            <PaperProvider theme={THEME}>
                <View style={styles.view}>
                    <AuthenticationContextProvider>
                        <AppRoutes />
                    </AuthenticationContextProvider>
                </View>
            </PaperProvider>
        </StartAppLoader>
    );
};

export default App;
