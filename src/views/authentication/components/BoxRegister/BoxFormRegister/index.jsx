//#region Imports

import ButtonReturn from 'components/ButtonReturn';
import Margin from 'components/Margin';
import React, { Fragment } from 'react';
import FormRegister from './../../../forms/FormRegister/index';

//#endregion

const BoxFormRegister = ({ setIsLogin, setIsFormRegister }) => (
    <Fragment>
        <ButtonReturn onPress={() => setIsLogin(true)} />

        <Margin paddingTop={0} paddingBottom={0}>
            <FormRegister setIsFormRegister={setIsFormRegister} />
        </Margin>
    </Fragment>
);

export default BoxFormRegister;
