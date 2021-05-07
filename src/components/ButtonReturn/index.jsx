//#region Imports

import React from 'react';
import { IconButton } from 'react-native-paper';
import useStyles from './styles';

//#endregion

const ButtonReturn = ({ onPress }) => {
    const styles = useStyles();

    return <IconButton icon='arrow-left' color='#FFFFFF' style={styles.arrow} onPress={() => onPress()} />;
};

export default ButtonReturn;
