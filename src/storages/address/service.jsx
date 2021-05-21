//#region Imports

import { useCallback, useEffect } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import formatFetchCep from './format/formatFetchCep';
import { getCep, getCityOptions, getStateOptions } from './services/send-data';

//#endregion

const useAddressService = ({ setIsLoading, setAddress, setCityOptions, setStateOptions }) => {
    const { run, requestState } = useRequestState();

    useEffect(() => {
        console.log('requestState', requestState);
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const fetchCep = useCallback(
        async (value) => {
            const { data, errors } = await run(() => getCep(value));
            console.log('data', data);
            const formated = formatFetchCep(data);
            setAddress(formated, errors);
        },
        [run, setAddress]
    );

    const fetchCityOptions = useCallback(
        async (stateId) => {
            const { data, errors } = await run(() => getCityOptions(stateId));
            setCityOptions(data, errors);
        },
        [run, setCityOptions]
    );

    const fetchStateOptions = useCallback(
        async (stateId) => {
            const { data, errors } = await run(() => getStateOptions(stateId));
            setStateOptions(data, errors);
        },
        [run, setStateOptions]
    );

    return {
        fetchCep,
        fetchCityOptions,
        fetchStateOptions
    };
};

export default useAddressService;
