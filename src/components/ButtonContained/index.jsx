//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import useStyles from './styles';
import clsx from 'utils/function/clsx';

//#endregion

const ButtonContained = ({
    color,
    children,
    marginTop,
    backgoundColor,
    rounded = false,
    mode = 'contained',
    ...rest
}) => {
    const styles = useStyles(marginTop, color, backgoundColor);

    const buttonStyle = clsx({
        [styles.button]: true,
        [styles.rounded]: rounded,
        [styles.outlined]: mode === 'outlined',
        [styles.contained]: mode === 'contained'
    });

    return (
        <View style={styles.container}>
            <Button mode={mode} style={buttonStyle} contentStyle={buttonStyle} {...rest}>
                <Text style={styles.text}>{children}</Text>
            </Button>
        </View>
    );
};

export default ButtonContained;
