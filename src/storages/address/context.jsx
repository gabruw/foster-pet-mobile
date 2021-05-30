//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import CITY_FIELDS from 'utils/constants/fields/city';
import STATE_FIELDS from 'utils/constants/fields/state';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import isInvalid from 'utils/functions/isInvalid';
import addressSchema from 'utils/validations/yup/schemas/address';
import useAddressService from './service';

//#endregion

const AddressContext = createContext();

const initialState = {
    [STATE_FIELDS.THIS]: null,
    [ADDRESS_FIELDS.THIS]: null,
    [CITY_FIELDS.OPTIONS]: null,
    [STATE_FIELDS.OPTIONS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const AddressContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setIsLoading = useCallback(
        (isLoading = false) =>
            setState((prevState) => ({
                ...prevState,
                isLoading: isInvalid(isLoading) ? !prevState.isLoading : isLoading
            })),
        [setState]
    );

    const setAddress = useCallback((address = null) => setState((prevState) => ({ ...prevState, address })), [
        setState
    ]);

    const setSelectedState = useCallback(
        (value = null) => setState((prevState) => ({ ...prevState, [STATE_FIELDS.THIS]: value })),
        [setState]
    );

    const setCityOptions = useCallback(
        (cityOptions = null) => setState((prevState) => ({ ...prevState, cityOptions })),
        [setState]
    );

    const setStateOptions = useCallback(
        (stateOptions = null) => setState((prevState) => ({ ...prevState, stateOptions })),
        [setState]
    );

    return (
        <AddressContext.Provider
            value={{ state, setIsLoading, setAddress, setSelectedState, setCityOptions, setStateOptions }}
        >
            {children}
        </AddressContext.Provider>
    );
};

const useAddressContext = () => {
    const context = useContext(AddressContext);
    const service = useAddressService(context);

    const { state, setIsLoading, setAddress, setSelectedState, setCityOptions, setStateOptions } = context;

    return { setIsLoading, setAddress, setSelectedState, setCityOptions, setStateOptions, ...state, ...service };
};

export default useAddressContext;
