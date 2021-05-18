//#region Imports

import React, { Fragment, useCallback } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import clsx from 'utils/functions/clsx';
import useStyles from './styles';

//#endregion

const ButtonRoundnessGroup = ({ values = [], active, setActive, backgroundColor, ...rest }) => {
    const styles = useStyles(backgroundColor);

    const buttonStyles = useCallback(
        (value, index) =>
            clsx({
                [styles.button]: true,
                [styles.withoutRadius]: true,
                [styles.active]: value === active,
                [styles.endRadius]: values.length - 1 === index,
                [styles.startRadius]: values.length > 1 && index === 0
            }),
        [styles, active, values]
    );

    const textStyles = useCallback(
        (value) =>
            clsx({
                [styles.text]: true,
                [styles.textActive]: value === active,
                [styles.textUnactive]: value !== active
            }),
        [styles, active]
    );

    return (
        <Fragment>
            {values.map(({ text, value }, index) => (
                <View key={index} style={styles.buttonContainer}>
                    <Button
                        mode='contained'
                        theme={{ roundness: 0 }}
                        onPress={() => setActive(value)}
                        style={buttonStyles(value, index)}
                        contentStyle={buttonStyles(value, index)}
                        {...rest}
                    >
                        <Text style={textStyles(value)}>{text}</Text>
                    </Button>
                </View>
            ))}
        </Fragment>
    );
};

export default ButtonRoundnessGroup;
