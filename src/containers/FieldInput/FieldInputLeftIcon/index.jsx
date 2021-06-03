//#region Imports

import COLOR from 'assets/styles/color';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const LeftIcon = ({ icon, isIconSolid }) => {
    const styles = useStyles();

    return icon && <Icon size={18} name={icon} color={DARKEST} style={styles.left} solid={isIconSolid} />;
};

export default LeftIcon;
