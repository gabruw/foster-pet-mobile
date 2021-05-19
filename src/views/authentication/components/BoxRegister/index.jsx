//#region Imports

import React from 'react';
import useAuthenticationContext from 'storages/authentication/context';
import BoxFormAddress from './BoxFormAddress';
import BoxFormRegister from './BoxFormRegister';

//#endregion

const BoxRegister = () => {
    const { isFormRegister } = useAuthenticationContext();

    return !isFormRegister ? <BoxFormAddress /> : <BoxFormRegister />;
};

export default BoxRegister;
