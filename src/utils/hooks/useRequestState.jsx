//#region Imports

import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import MISC_ERRORS from 'utils/constants/errors/misc';
import sleep from 'utils/functions/sleep';
import { ROUTE_NAMES } from 'routes/routes';

//#endregion

const initalState = {
    data: null,
    errors: null,
    success: false,
    isLoading: false
};

const useRequestState = () => {
    const { navigate } = useNavigation();
    const [requestState, setRequestState] = useState(initalState);

    const clear = useCallback((timeout = 100) => setTimeout(() => setRequestState(initalState), timeout), []);

    const run = useCallback(
        async (callback, options) => {
            setRequestState({ ...initalState, isLoading: true, success: false });

            if (options && options.sleep) {
                await sleep(options.sleepTimeout || 3000);
            }

            let responseObj = null;
            try {
                const { data } = await callback();

                const values = data.data ? data.data : data;
                const errors = data.errors ? data.errors : initalState.errors;

                responseObj = {
                    ...initalState,
                    success: true,
                    data: values,
                    errors: errors
                };
            } catch (error) {
                const responseError = error && error.response;
                if (responseError && responseError.status === 401) {
                    navigate(ROUTE_NAMES.AUTHENTICATION);
                }

                if (options && options.autoClear) {
                    clear(5000);
                }

                responseObj = {
                    ...initalState,
                    errors: responseError && responseError.data ? responseError.data.errors : MISC_ERRORS.UNKNOW
                };
            }

            setRequestState(responseObj);
            return responseObj;
        },
        [history, clear]
    );

    return {
        run,
        clear,
        requestState
    };
};

export default useRequestState;
