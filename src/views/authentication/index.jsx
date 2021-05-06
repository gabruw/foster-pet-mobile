//#region Imports

import GradientBackground from 'components/GradientBackground';
import React, { useState } from 'react';
import { AddressContextProvider } from 'storages/address/context';
import { CompanyContextProvider } from 'storages/company/context';
import { PersonContextProvider } from 'storages/person/context';
import BoxLogin from './components/BoxLogin';
import BoxRegister from './components/BoxRegister';

//#endregion

const Authentication = () => {
    const [register, setRegister] = useState(true);

    return (
        <GradientBackground>
            <AddressContextProvider>
                <PersonContextProvider>
                    <CompanyContextProvider>
                        {register ? <BoxLogin changeForm={setRegister} /> : <BoxRegister />}
                    </CompanyContextProvider>
                </PersonContextProvider>
            </AddressContextProvider>
        </GradientBackground>
    );
};

export default Authentication;
