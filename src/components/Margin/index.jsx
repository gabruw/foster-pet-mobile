//#region Imports

import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';

//#endregion

const Margin = ({ children, paddingTop, paddingLeft, paddingRight, paddingBottom }) => {
    const styles = useStyles(paddingTop, paddingLeft, paddingRight, paddingBottom);

    return <View style={styles.container}>{children}</View>;
};

export default Margin;
