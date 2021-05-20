//#region Imports

import IconButton from 'components/IconButton';
import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';

//#endregion

const ButtonReturn = ({ ...rest }) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <IconButton icon='arrow-left' {...rest} />
        </View>
    );
};

export default ButtonReturn;
