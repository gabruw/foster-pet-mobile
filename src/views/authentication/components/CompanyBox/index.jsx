//#region Imports

import SnackbarError from 'containers/SnackbarError';
import React from 'react';
import { View } from 'react-native';
import useCompanyContext from 'storages/company/context';
import FormCompany from './../../forms/FormCompany';
import useStyles from './styles';

//#endregion

const PersonBox = () => {
    const styles = useStyles();
    const { error } = useCompanyContext();

    return (
        <View>
            <FormCompany />
            <SnackbarError errors={error} />
        </View>
    );
};

export default PersonBox;
