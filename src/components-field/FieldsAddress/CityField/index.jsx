//#region Imports

import FieldPicker from 'containers/FieldPicker';
import React, { useEffect } from 'react';
import useCityContext from 'storages/city/context';
import CITY_FIELDS from 'utils/constants/fields/city';
import STATE_FIELDS from 'utils/constants/fields/state';
import CITY_LABELS from 'utils/constants/labels/city';

//#endregion

const CityField = () => {
    const { fetchOptions } = useCityContext();

    const {
        control,
        getValues,
        formState: { errors }
    } = form;

    useEffect(() => {
        const stateId = getValues(STATE_FIELDS.NAME);
        // fetchOptions(stateId);
    }, [fetchOptions]);

    return (
        <FieldPicker icon='city' errors={errors} control={control} name={CITY_FIELDS.THIS} label={CITY_LABELS.NAME} />
    );
};

export default CityField;
