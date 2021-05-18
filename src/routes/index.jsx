//#region Imports

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from 'routes/navigators/StackNavigator';

//#endregion

const Router = () => (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
);

export default Router;
