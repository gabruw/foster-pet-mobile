//#region Imports

import ButtonReturn from 'components/ButtonReturn';
import Margin from 'components/Margin';
import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import useAuthenticationContext from 'storages/authentication/context';
import FormAddress from 'views/authentication/forms/FormAddress';
import FormRegister from 'views/authentication/forms/FormRegister';

//#endregion

const BoxRegister = () => {
    const { isFormRegister, setIsFormRegister, setIsLogin } = useAuthenticationContext();

    const goBack = useCallback(() => (isFormRegister ? setIsLogin(true) : setIsFormRegister(true)), [isFormRegister]);

    return (
        <ScrollView>
            <ButtonReturn onPress={() => goBack()} />
            <Margin paddingTop={0}>{isFormRegister ? <FormRegister /> : <FormAddress />}</Margin>
        </ScrollView>
    );
};

export default BoxRegister;
