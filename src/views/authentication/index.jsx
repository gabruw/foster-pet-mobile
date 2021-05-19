//#region Imports

import GradientBackground from 'components/GradientBackground';
import React from 'react';
import { AddressContextProvider } from 'storages/address/context';
import useAuthenticationContext, { AuthenticationContextProvider } from 'storages/authentication/context';
import { UserContextProvider } from 'storages/user/context';
import BoxLogin from './components/BoxLogin';
import BoxRegister from './components/BoxRegister';

//#endregion

const Content = () => {
    const { isLogin } = useAuthenticationContext();

    return (
        <GradientBackground>
            {isLogin ? (
                <BoxLogin />
            ) : (
                <AddressContextProvider>
                    <UserContextProvider>
                        <BoxRegister />
                    </UserContextProvider>
                </AddressContextProvider>
            )}
        </GradientBackground>
    );
};

const Authentication = () => (
    <AuthenticationContextProvider>
        <Content />
    </AuthenticationContextProvider>
);

export default Authentication;
