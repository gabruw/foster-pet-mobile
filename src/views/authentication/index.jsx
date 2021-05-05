//#region Imports

import GradientBackground from 'components/GradientBackground';
import React, { Fragment, useRef, useState } from 'react';
import { Button } from 'react-native-paper';
import { View } from 'react-native';
import { AddressContextProvider } from 'storages/address/context';
import { CompanyContextProvider } from 'storages/company/context';
import { PersonContextProvider } from 'storages/person/context';
import CompanyBox from './components/CompanyBox';
import LoginBox from './components/LoginBox';
import PersonBox from './components/PersonBox';

//#endregion

const Authentication = () => {
    const [register, setRegister] = useState(true);
    const [formType, setFormType] = useState('PERSON');

    return (
        <GradientBackground>
            {register ? (
                <LoginBox changeForm={setRegister} />
            ) : (
                <Fragment>
                    <View>
                        <Button onPress={() => setFormType('PERSON')}>Pessoa</Button>
                        <Button onPress={() => setFormType('COMPANY')}>Empresa</Button>
                    </View>

                    <AddressContextProvider>
                        {formType === 'PERSON' && (
                            <PersonContextProvider>
                                <PersonBox />
                            </PersonContextProvider>
                        )}
                        {formType === 'COMPANY' && (
                            <CompanyContextProvider>
                                <CompanyBox />
                            </CompanyContextProvider>
                        )}
                    </AddressContextProvider>
                </Fragment>
            )}
        </GradientBackground>
    );
};

export default Authentication;
