//#region Imports

import ButtonReturn from 'components/ButtonReturn';
import Margin from 'components/Margin';
import React from 'react';
import useAuthenticationContext from 'storages/authentication/context';
import FormRegister from './../../../forms/FormRegister';

//#endregion

const BoxFormRegister = () => {
    const { setIsLogin } = useAuthenticationContext();

    return (
        <Margin paddingLeft={0} paddingRight={0} paddingTop={0}>
            <ButtonReturn onPress={() => setIsLogin(true)} />
            <FormRegister />
        </Margin>
    );
};

export default BoxFormRegister;
