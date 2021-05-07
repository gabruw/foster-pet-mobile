//#region Imports

import ButtonReturn from 'components/ButtonReturn';
import Margin from 'components/Margin';
import React, { Fragment } from 'react';
import FormAddress from './../../../forms/FormAddress/index';

//#endregion

const BoxFormAddress = ({ setIsFormRegister }) => (
    <Fragment>
        <ButtonReturn onPress={() => setIsFormRegister(true)} />

        <Margin paddingTop={0}>
            <FormAddress />
        </Margin>
    </Fragment>
);

export default BoxFormAddress;