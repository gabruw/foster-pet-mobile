//#region Imports

import FieldPicker from 'containers/FieldPicker';
import React, { useEffect } from 'react';
import useAddressContext from 'storages/address/context';
import useStateContext from 'storages/state/context';
import STATE_FIELDS from 'utils/constants/fields/state';
import STATE_LABELS from 'utils/constants/labels/state';

//#endregion

const StateField = () => {
    const { form } = useAddressContext();
    const { fetchOptions } = useStateContext();

    const {
        control,
        formState: { errors }
    } = form;

    useEffect(() => {
        // fetchOptions(1);
    }, []);

    return (
        <FieldPicker icon='flag' errors={errors} control={control} name={STATE_FIELDS.THIS} label={STATE_LABELS.NAME} />
    );
};

export default StateField;
