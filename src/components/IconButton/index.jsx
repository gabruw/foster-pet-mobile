//#region Imports

import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';

//#endregion

const IconButton = ({ icon, isLoading, isDisabled, color = '#FFFFFF', ...rest }) => {
    const styles = useStyles();

    return (
        <Button
            {...rest}
            type='clear'
            loading={isLoading}
            buttonStyle={styles.button}
            containerStyle={styles.container}
            disabled={isLoading || isDisabled}
            icon={<Icon style={styles.icon} size={18} name={icon} color={color} />}
        />
    );
};

export default IconButton;
