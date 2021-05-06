//#region Imports

import GradientBackground from 'components/GradientBackground';
import SnackbarError from 'containers/SnackbarError';
import React, { useMemo, useState } from 'react';
import { AddressContextProvider } from 'storages/address/context';
import useAuthenticationContext from 'storages/authentication/context';
import useCompanyContext, { CompanyContextProvider } from 'storages/company/context';
import usePersonContext, { PersonContextProvider } from 'storages/person/context';
import handleArrayErrors from 'utils/function/handleArrayErrors';
import BoxLogin from './components/BoxLogin';
import BoxRegister from './components/BoxRegister';

//#endregion

const AuthenticationContent = () => {
    const [isLogin, setIsLogin] = useState(true);

    const { error: personErrors } = usePersonContext();
    const { error: companyErrors } = useCompanyContext();
    const { error: auhtenticationError } = useAuthenticationContext();

    const errors = useMemo(() => handleArrayErrors([personErrors, companyErrors, auhtenticationError]), [
        personErrors,
        companyErrors,
        auhtenticationError
    ]);

    return (
        <GradientBackground>
            {isLogin ? <BoxLogin setIsLogin={setIsLogin} /> : <BoxRegister setIsLogin={setIsLogin} />}
            <SnackbarError errors={errors} />
        </GradientBackground>
    );
};

const Authentication = () => (
    <AddressContextProvider>
        <PersonContextProvider>
            <CompanyContextProvider>
                <AuthenticationContent />
            </CompanyContextProvider>
        </PersonContextProvider>
    </AddressContextProvider>
);

export default Authentication;
