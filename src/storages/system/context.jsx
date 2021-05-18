//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import SYSTEM_FIELDS from 'utils/constants/fields/system';

//#endregion

const { TOKEN, NAME, ROLE, USER_TYPE } = SYSTEM_FIELDS;

const SystemContext = createContext();

const initialState = {
    [ROLE]: null,
    [NAME]: null,
    [TOKEN]: null,
    [USER_TYPE]: null
};

export const SystemContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setLogin = useCallback(
        ({ role, name, token, userType }) => setState((prevState) => ({ ...prevState, role, name, token, userType })),
        [setState]
    );

    return <SystemContext.Provider value={{ state, setLogin }}>{children}</SystemContext.Provider>;
};

const useSystemContext = () => {
    const { state, setLogin } = useContext(SystemContext);

    return { setLogin, ...state };
};

export default useSystemContext;
