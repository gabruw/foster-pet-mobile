//#region Imports

import GradientBackground from 'components/GradientBackground';
import React from 'react';
import { PersonContextProvider } from 'storages/person/context';
import LoginBox from './components/LoginBox';
import PersonBox from './components/PersonBox';
import CompanyBox from './components/CompanyBox';
import { CompanyContextProvider } from 'storages/company/context';
import { AddressContextProvider } from 'storages/address/context';

//#endregion

const Authentication = () => {
    return (
        <GradientBackground>
            <AddressContextProvider>
                {/* <PersonContextProvider>
                    <PersonBox />
                </PersonContextProvider> */}

                <CompanyContextProvider>
                    <CompanyBox />
                </CompanyContextProvider>
            </AddressContextProvider>

            {/* <LoginBox /> */}
        </GradientBackground>
    );
};

export default Authentication;
