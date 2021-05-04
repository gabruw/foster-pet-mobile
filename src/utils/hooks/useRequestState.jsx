//#region Imports

import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import UNKNOW_ERROR from 'utils/constants/error/unknow';
import sleep from 'utils/constants/function/sleep';

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

                responseObj = {
                    ...initalState,
                    success: true,
                    data: data.data,
                    token: data.token,
                    errors: data.errors
                };
            } catch (error) {
                const hadError = error && error.response;
                if (hadError && error.response.status === 401) {
                    history.push([ROUTE_NAME.AUTHENTICATION]);
                }

                if (options?.autoClear) {
                    clear(5000);
                }

                responseObj = {
                    ...initalState,
                    errors: hadError && error.response.data ? error.response.data.errors : [UNKNOW_ERROR]
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
