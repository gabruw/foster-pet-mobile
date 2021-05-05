//#region Imports

import { Picker } from '@react-native-picker/picker';
import COLOR from 'assets/styles/color';
import React from 'react';
import { useController } from 'react-hook-form';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import useStyles from './styles';

//#endregion

const { PURPLE } = COLOR.BACKGROUND;

const StyledPicker = ({ name, label, control, outlineColor, defaultValue = '', iconColor = PURPLE }) => {
    const styles = useStyles(outlineColor);

    const { field } = useController({
        name,
        control,
        defaultValue
    });

    return (
        <View style={styles.view}>
            <View styles={styles.iconView}>
                <TextInput.Icon name='city' color={iconColor} style={styles.icon} />
            </View>

            <View style={styles.pickerView}>
                <Picker
                    mode='dialog'
                    style={styles.picker}
                    selectedValue={field.value}
                    onValueChange={(itemValue) => field.onChange(itemValue)}
                >
                    <Picker.Item label={label} value='' />
                    <Picker.Item label='City' value='courses' />
                </Picker>
            </View>
        </View>
    );
};

export default StyledPicker;
