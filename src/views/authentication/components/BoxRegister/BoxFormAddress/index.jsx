//#region Imports

import ButtonReturn from 'components/ButtonReturn';
import Margin from 'components/Margin';
import React, { Fragment } from 'react';
import useAuthenticationContext from 'storages/authentication/context';
import FormAddress from './../../../forms/FormAddress';

//#endregion

const BoxFormAddress = () => {
    const { setIsFormRegister } = useAuthenticationContext();

    return (
        <Fragment>
            <ButtonReturn onPress={() => setIsFormRegister(true)} />

            <Margin paddingLeft={0} paddingRight={0} paddingTop={0}>
                <FormAddress />
            </Margin>
        </Fragment>
    );
};

export default BoxFormAddress;
