//#region Imports

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ROUTE_NAMES, STACK_ROUTES } from 'routes/routes';

//#endregion

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator initialRouteName={ROUTE_NAMES.AUTHENTICATION} screenOptions={{ headerShown: false }}>
        {STACK_ROUTES.map(({ name, Component }, index) => (
            <Stack.Screen key={index} name={name} component={Component} />
        ))}
    </Stack.Navigator>
);

export default StackNavigator;
