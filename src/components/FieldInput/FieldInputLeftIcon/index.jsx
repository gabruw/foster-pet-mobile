//#region Imports

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';

//#endregion

const LeftIcon = ({ icon, isIconSolid }) => {
    const styles = useStyles();

    return icon && <Icon name={icon} size={18} style={styles.left} solid={isIconSolid} />;
};

export default LeftIcon;
