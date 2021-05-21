//#region Imports

import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { ROUTE_NAMES } from 'routes/routes';
import MISC_ERRORS from 'utils/constants/errors/misc';

//#endregion

const useRequestError = () => {
    const { navigate } = useNavigation();

    const getAction = useMemo(
        () => ({
            401: navigate(ROUTE_NAMES.AUTHENTICATION)
        }),
        [navigate]
    );

    const getError = useCallback(
        (error) => {
            const responseError = error && error.response;

            const action = getAction[responseError.status]();
            if (action) {
                return action();
            }

            return responseError && responseError.data ? responseError.data.errors : MISC_ERRORS.UNKNOW;
        },
        [navigate, getAction]
    );

    return {
        getError
    };
};

export default useRequestError;
