//#region Imports

import { useCallback, useEffect } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import formatFetchCep from './format/formatFetchCep';
import { getCep, getCityOptions, getStateOptions } from './services/send-data';

//#endregion

const useAddressService = ({ setIsLoading, setAddress, setCityOptions, setStateOptions }) => {
    const { run, requestState } = useRequestState();

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const fetchCep = useCallback(async (value) => {
        const { data, errors } = await run(() => getCep(value));

        const formated = formatFetchCep(data);
        setAddress(formated, errors);
    }, []);

    const fetchCityOptions = useCallback(async (stateId) => {
        const { data, errors } = await run(() => getCityOptions(stateId));
        setCityOptions(data, errors);
    }, []);

    const fetchStateOptions = useCallback(async () => {
        const { data, errors } = await run(() => getStateOptions());
        setStateOptions(data, errors);
    }, []);

    return {
        fetchCep,
        fetchCityOptions,
        fetchStateOptions
    };
};

export default useAddressService;
