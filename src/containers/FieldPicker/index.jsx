//#region Imports

import { Picker } from '@react-native-picker/picker';
import COLOR from 'assets/styles/color';
import FieldLabel from 'components/FieldLabel';
import React, { Fragment } from 'react';
import { useController } from 'react-hook-form';
import { View } from 'react-native';
import FieldPickerIcon from './FieldPickerIcon';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const FieldPicker = ({ name, label, control, icon, iconColor, items = [], isRequired = true }) => {
    const styles = useStyles();
    const { field } = useController({ name, control });

    return (
        <View style={styles.container}>
            <FieldLabel label={label} isRequired={isRequired} />

            <View style={styles.pickerContainer}>
                <FieldPickerIcon icon={icon} iconColor={iconColor} />

                <View style={styles.containerPicker}>
                    <Picker
                        mode='dialog'
                        style={styles.picker}
                        selectedValue={field.value}
                        onValueChange={(itemValue) => field.onChange(itemValue)}
                    >
                        <Picker.Item label={label} value={undefined} color={DARKEST} />
                        {items.map((item) => (
                            <Picker.Item label={item.text} value={item.value} color={DARKEST} />
                        ))}
                    </Picker>
                </View>
            </View>
        </View>
    );
};

export default FieldPicker;
