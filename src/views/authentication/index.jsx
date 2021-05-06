//#region Imports

import GradientBackground from 'components/GradientBackground';
import React, { useState } from 'react';
import { View } from 'react-native';
import { AddressContextProvider } from 'storages/address/context';
import { CompanyContextProvider } from 'storages/company/context';
import { PersonContextProvider } from 'storages/person/context';
import BoxLogin from './components/BoxLogin';
import BoxRegister from './components/BoxRegister';
import useStyles from './styles';

//#endregion

const Authentication = () => {
    const styles = useStyles();
    const [isFormLogin, setIsFormLogin] = useState(true);

    return (
        <GradientBackground>
            <View style={styles.container}>
                <AddressContextProvider>
                    <PersonContextProvider>
                        <CompanyContextProvider>
                            {isFormLogin ? <BoxLogin changeForm={setIsFormLogin} /> : <BoxRegister />}
                        </CompanyContextProvider>
                    </PersonContextProvider>
                </AddressContextProvider>
            </View>
        </GradientBackground>
    );
};

export default Authentication;
