//#region Imports

import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import clsx from 'utils/constants/function/clsx';
import useStyles from './styles';

//#endregion

const ButtonGroup = ({ style, values = [], backgroundColor, backgroundColorActived, ...rest }, ref) => {
    const styles = useStyles(backgroundColor, backgroundColorActived);
    const [active, setActive] = useState(values.length > 0 && values[0].value);

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

    return (
        <View style={styles.container}>
            {values.map(({ text, value }, index) => (
                <View key={index} style={styles.buttonContainer}>
                    <Button
                        mode='contained'
                        onPress={() => setActive(value)}
                        style={[...buttonStyles(value, index), style]}
                        contentStyle={[...buttonStyles(value, index), style]}
                        {...rest}
                    >
                        {text}
                    </Button>
                </View>
            ))}

            <View style={styles.radioGroup}>
                <RadioButton.Group onValueChange={(value) => setActive(value)} value={active}>
                    {values.map(({ value }, index) => (
                        <View key={index}>
                            <RadioButton value={value} />
                        </View>
                    ))}
                </RadioButton.Group>
            </View>
        </View>
    );
};

export default ButtonGroup;
