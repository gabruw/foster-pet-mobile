//#region Imports

import { useCallback, useState } from 'react';
import sleep from 'utils/functions/sleep';
import useRequestError from './useRequestError';

//#endregion

const initalState = {
    data: null,
    errors: null,
    isLoading: false
};

const initialOptions = {
    sleep: false,
    autoClear: false,
    sleepTimeout: null
};

const useRequestState = () => {
    const { getError } = useRequestError();
    const [requestState, setRequestState] = useState(initalState);

    const clear = useCallback((timeout = 100) => setTimeout(() => setRequestState(initalState), timeout), []);

    const clearRequestState = useCallback((options) => options.autoClear && clear(5000), []);
    const waitResults = useCallback((options) => options.sleep && sleep(options.sleepTimeout || 3000), []);

    const run = useCallback(
        async (callback, options = initialOptions) => {
            setRequestState({ ...initalState, isLoading: true });
            waitResults(options);

            let responseObj = null;
            try {
                const { data } = await callback();

                responseObj = {
                    ...initalState,
                    data: data.data || data,
                    errors: data.errors || initalState.errors
                };
            } catch (error) {
                const fltError = getError(error);
                clearRequestState(options);

                responseObj = {
                    ...initalState,
                    errors: fltError
                };
            }

            setRequestState(responseObj);
            return responseObj;
        },
        [clear]
    );

    return {
        run,
        clear,
        requestState
    };
};

export default useRequestState;
