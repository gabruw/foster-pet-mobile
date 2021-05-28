//#region Imports

import SplashLoader from 'containers/SplashLoader';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SystemContextProvider } from 'storages/system/context';
import Router from './routes';
import AnimalCard from './views/animals/animals-list/animals-card/index';
import AnimalList from './views/animals/animals-list/list-animals-card/index';


const App = () => (
    <SafeAreaProvider>
        <SystemContextProvider>
            <SplashLoader>
                {/* <Router /> */}
                <AnimalList/>
                 {/* <AnimalCard/> */}
            </SplashLoader>
        </SystemContextProvider>
    </SafeAreaProvider>
);

export default App;
