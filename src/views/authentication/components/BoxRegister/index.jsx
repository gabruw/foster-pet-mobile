//#region Imports

import React, { Fragment } from 'react';
import FormRegister from '../../forms/FormRegister';
import useStyles from './styles';

//#endregion

const BoxRegister = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <FormRegister />
        </Fragment>
    );
};

export default BoxRegister;
