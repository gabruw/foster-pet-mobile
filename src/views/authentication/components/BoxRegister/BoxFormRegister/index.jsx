//#region Imports

import ButtonReturn from 'components/ButtonReturn';
import Margin from 'components/Margin';
import React from 'react';
import FormRegister from './../../../forms/FormRegister';

//#endregion

const BoxFormRegister = ({ setIsLogin, setIsFormRegister }) => (
    <Margin paddingLeft={0} paddingRight={0} paddingTop={0}>
        <ButtonReturn onPress={() => setIsLogin(true)} />
        <FormRegister setIsFormRegister={setIsFormRegister} />
    </Margin>
);

export default BoxFormRegister;
