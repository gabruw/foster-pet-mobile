//#region Imports

import FieldPicker from 'containers/FieldPicker';
import React, { useEffect } from 'react';
import useAddressContext from 'storages/address/context';
import CITY_FIELDS from 'utils/constants/fields/city';
import CITY_LABELS from 'utils/constants/labels/city';

//#endregion

const CityField = () => {
    const { fetchCityOptions, cityOptions, state } = useAddressContext();

    useEffect(() => {
        state && fetchCityOptions(state);
    }, [state]);

    return <FieldPicker icon='city' name={CITY_FIELDS.THIS} label={CITY_LABELS.NAME} items={cityOptions} />;
};

export default CityField;
