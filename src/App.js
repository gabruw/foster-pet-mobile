//#region Imports

import AppRoutes from 'AppRoutes';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

//#endregion

const App = () => (
    <View>
        <StatusBar style='dark' />
        <AppRoutes />
    </View>
);

export default App;
