//#region Imports

import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import MISC_ERROR from 'utils/constants/error/misc';
import sleep from 'utils/function/sleep';

//#endregion

const initalState = {
    data: null,
    errors: null,
    success: false,
    isLoading: false
};

const useRequestState = () => {
    const history = useHistory();
    const [requestState, setRequestState] = useState(initalState);

    const clear = useCallback((timeout = 100) => setTimeout(() => setRequestState(initalState), timeout), []);

    const run = useCallback(
        async (callback, options) => {
            setRequestState({ ...initalState, isLoading: true, success: undefined });

            if (options?.sleep) {
                await sleep(options?.sleepTimeout || 3000);
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
                    history.push([ROUTE_NAME.AUTHENTICATION]);
                }

                if (options?.autoClear) {
                    clear(5000);
                }

                responseObj = {
                    ...initalState,
                    errors: responseError && responseError.data ? responseError.data.errors : MISC_ERROR.UNKNOW
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
