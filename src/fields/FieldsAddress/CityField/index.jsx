//#region Imports

import FieldPicker from 'containers/FieldPicker';
import React, { useEffect } from 'react';
import useCityContext from 'storages/city/context';
import CITY_FIELD from 'utils/constants/field/city';
import STATE_FIELD from 'utils/constants/field/state';
import CITY_LABEL from 'utils/constants/label/city';

//#endregion

const CityField = ({ control, errors, getValues }) => {
    const { fetchOptions } = useCityContext();

    // useEffect(() => {
    //     const stateId = getValues(STATE_FIELD.NAME);
    //     fetchOptions(stateId);
    // }, [fetchOptions]);

    return (
        <FieldPicker iconName='city' errors={errors} control={control} name={CITY_FIELD.THIS} label={CITY_LABEL.NAME} />
    );
};

export default CityField;
