//#region Imports

import SnackbarError from 'containers/SnackbarError';
import React from 'react';
import { View } from 'react-native';
import usePersonContext from 'storages/person/context';
import FormPerson from '../../forms/FormPerson';
import useStyles from './styles';

//#endregion

const CompanyBox = () => {
    const styles = useStyles();
    const { error } = usePersonContext();

    return (
        <View>
            <FormPerson />
            <SnackbarError errors={error} />
        </View>
    );
};

export default CompanyBox;
