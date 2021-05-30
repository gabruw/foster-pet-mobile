//#region Imports

import FieldPicker from 'containers/FieldPicker';
import React, { useEffect } from 'react';
import useAddressContext from 'storages/address/context';
import STATE_FIELDS from 'utils/constants/fields/state';
import STATE_LABELS from 'utils/constants/labels/state';

//#endregion

const StateField = () => {
    const { fetchStateOptions, stateOptions, setSelectedState } = useAddressContext();

    useEffect(() => {
        fetchStateOptions(1);
    }, []);

    return (
        <FieldPicker
            icon='flag'
            items={stateOptions}
            name={STATE_FIELDS.THIS}
            label={STATE_LABELS.NAME}
            onChange={(value) => setSelectedState(value)}
        />
    );
};

export default StateField;
