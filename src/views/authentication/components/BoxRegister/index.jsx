//#region Imports

import React, { useState } from 'react';
import BoxFormAddress from './BoxFormAddress';
import BoxFormRegister from './BoxFormRegister';

//#endregion

const BoxRegister = ({ setIsLogin }) => {
    const [isFormRegister, setIsFormRegister] = useState(true);

    return isFormRegister ? (
        <BoxFormRegister setIsLogin={setIsLogin} setIsFormRegister={setIsFormRegister} />
    ) : (
        <BoxFormAddress setIsFormRegister={setIsFormRegister} />
    );
};

export default BoxRegister;
