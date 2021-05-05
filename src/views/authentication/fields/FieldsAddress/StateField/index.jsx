//#region Imports

import StyledPicker from 'containers/StyledPicker';
import React, { useEffect } from 'react';
import useStateContext from 'storages/state/context';
import STATE_FIELD from 'utils/constants/field/state';
import STATE_LABEL from 'utils/constants/label/state';

//#endregion

const StateField = ({ control, errors }) => {
    const { fetchOptions } = useStateContext();

    // useEffect(() => {
    //     fetchOptions(1);
    // }, []);

    return (
        <StyledPicker
            errors={errors}
            control={control}
            iconName='home-account'
            name={STATE_FIELD.THIS}
            label={STATE_LABEL.NAME}
        />
    );
};

export default StateField;