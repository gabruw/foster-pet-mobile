//#region Imports

import GradientBackground from 'components/GradientBackground';
import SnackbarError from 'containers/SnackbarError';
import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { AddressContextProvider } from 'storages/address/context';
import useAuthenticationContext from 'storages/authentication/context';
import useCompanyContext, { CompanyContextProvider } from 'storages/company/context';
import usePersonContext, { PersonContextProvider } from 'storages/person/context';
import handleArrayErrors from 'utils/function/handleArrayErrors';
import BoxLogin from './components/BoxLogin';
import BoxRegister from './components/BoxRegister';
import useStyles from './styles';

//#endregion

const AuthenticationContent = () => {
    const styles = useStyles();
    const [isFormLogin, setIsFormLogin] = useState(true);

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
            <View style={styles.container}>
                {isFormLogin ? <BoxLogin changeForm={setIsFormLogin} /> : <BoxRegister />}
                <SnackbarError errors={errors} />
            </View>
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
