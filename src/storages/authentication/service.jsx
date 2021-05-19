//#region Imports

import { useCallback, useEffect } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import { postLogin } from './services/send-data';

//#endregion

const useAuthenticationService = ({ setIsLoading, setAuthentication }) => {
    const { run, requestState } = useRequestState();

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const fetchLogin = useCallback(
        async (form) => {
            const { data, errors } = await run(() => postLogin(form));
            setAuthentication(data, errors);
        },
        [run, setAuthentication]
    );

    return {
        fetchLogin
    };
};

export default useAuthenticationService;
