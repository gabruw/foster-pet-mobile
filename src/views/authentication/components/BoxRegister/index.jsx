//#region Imports

import SnackbarError from 'containers/SnackbarError';
import React, { Fragment } from 'react';
import useCompanyContext from 'storages/company/context';
import usePersonContext from 'storages/person/context';
import FormRegister from '../../forms/FormRegister';
import useStyles from './styles';

//#endregion

const BoxRegister = () => {
    const styles = useStyles();
    const { error: personErrors } = usePersonContext();
    const { error: companyErrors } = useCompanyContext();

    return (
        <Fragment>
            <FormRegister />
            <SnackbarError errors={[personErrors, companyErrors].flat()} />
        </Fragment>
    );
};

export default BoxRegister;
