//#region Imports

import Margin from 'components/Margin';
import React, { Fragment } from 'react';
import { IconButton } from 'react-native-paper';
import FormRegister from '../../forms/FormRegister';
import useStyles from './styles';

//#endregion

const BoxRegister = ({ setIsLogin }) => {
    const styles = useStyles();

    return (
        <Fragment>
            <IconButton icon='arrow-left' color='#FFFFFF' style={styles.arrow} onPress={() => setIsLogin(true)} />

            <Margin paddingTop={0}>
                <FormRegister />
            </Margin>
        </Fragment>
    );
};

export default BoxRegister;
