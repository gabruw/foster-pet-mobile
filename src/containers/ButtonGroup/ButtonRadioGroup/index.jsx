//#region Imports

import React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import useStyles from './styles';

//#endregion

const ButtonRadioGroup = ({ values = [], active, setActive }) => {
    const styles = useStyles();

    return (
        <View style={styles.radioGroup}>
            <RadioButton.Group onValueChange={(value) => setActive(value)} value={active}>
                {values.map(({ value }, index) => (
                    <View key={index}>
                        <RadioButton value={value} />
                    </View>
                ))}
            </RadioButton.Group>
        </View>
    );
};

export default ButtonRadioGroup;
