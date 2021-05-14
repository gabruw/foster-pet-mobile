//#region Imports

import COLOR from 'assets/styles/color';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const FieldPickerIcon = ({ icon, iconColor = DARKEST }) => {
    const styles = useStyles();

    return <Icon name={icon} color={iconColor} size={18} style={styles.icon} solid />;
};

export default FieldPickerIcon;
