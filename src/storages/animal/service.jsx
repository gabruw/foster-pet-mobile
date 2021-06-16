//#region Imports

import { useCallback, useEffect } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import { postRegister } from './services/send-data';
import { getAnimal } from './services/get-data';

//#endregion

const useAnimalService = ({ setIsLoading, setAnimal }) => {
    const { run, requestState } = useRequestState();

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const fetchRegister = useCallback(
        async (form) => {
            const { data, errors } = await run(() => postRegister(form));
            setAnimal(data, errors);
        },
        [run, setAnimal]
    );

    const fetchAnimal = useCallback(
        async (value) => {
            const { data, errors } = await run(() => getAnimal(value));
            setAnimal(data, errors);
        },
        [run, setAnimal]
    );

    return {
        fetchRegister,
        fetchAnimal
    };
};

export default useAnimalService;
