//#region Imports

import FieldPicker from 'containers/FieldPicker';
import React, { useEffect } from 'react';
import useAddressContext from 'storages/address/context';
import useFormContext from 'storages/form/context';
import CITY_FIELDS from 'utils/constants/fields/city';
import STATE_FIELDS from 'utils/constants/fields/state';
import CITY_LABELS from 'utils/constants/labels/city';

//#endregion

const CityField = () => {
    const { getValues } = useFormContext();
    const { fetchCityOptions } = useAddressContext();

    useEffect(() => {
        const stateId = getValues(STATE_FIELDS.NAME);
        // fetchCityOptions(stateId);
    }, []);

    return <FieldPicker icon='city' name={CITY_FIELDS.THIS} label={CITY_LABELS.NAME} />;
};

export default CityField;
