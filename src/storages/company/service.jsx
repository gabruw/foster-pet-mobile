//#region Imports

import { useCallback, useEffect } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import { postRegister } from './services/send-data';

//#endregion

const useCompanyService = ({ setIsLoading }) => {
    const { run, requestState } = useRequestState();

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const register = useCallback(
        async (form) => {
            await run(() => postRegister(form));
        },
        [run]
    );

    return {
        register
    };
};

export default useCompanyService;
