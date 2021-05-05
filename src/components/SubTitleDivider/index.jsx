//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import useStyles from './styles';

//#endregion

const SubTitleDivider = ({ text, color }) => {
    const styles = useStyles(color);

    return (
        <View style={styles.content}>
            <Text style={styles.text}>{text}</Text>
            <Divider style={styles.divider} />
        </View>
    );
};

export default SubTitleDivider;
