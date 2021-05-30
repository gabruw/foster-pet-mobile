//#region Imports

import { Picker } from '@react-native-picker/picker';
import COLOR from 'assets/styles/color';
import FieldLabel from 'components/FieldLabel';
import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';
import { View } from 'react-native';
import useFormContext from 'storages/form/context';
import FieldPickerIcon from './FieldPickerIcon';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const FieldPicker = ({ name, label, icon, iconColor, onChange, items = [], isRequired = true }) => {
    const styles = useStyles();

    const { control } = useFormContext();
    const { field } = useController({ name, control });

    const handleChange = useCallback(
        (value) => {
            field.onChange(value);
            onChange && onChange(value);
        },
        [field, onChange]
    );

    return (
        <View style={styles.container}>
            <FieldLabel label={label} isRequired={isRequired} />

            <View style={styles.content}>
                <FieldPickerIcon icon={icon} iconColor={iconColor} />

                <View style={styles.containerPicker}>
                    <Picker
                        mode='dialog'
                        style={styles.picker}
                        selectedValue={field.value}
                        onValueChange={(itemValue) => handleChange(itemValue)}
                    >
                        <Picker.Item label={label} value={undefined} color={DARKEST} />
                        {items &&
                            items.map((item) => <Picker.Item label={item.text} value={item.value} color={DARKEST} />)}
                    </Picker>
                </View>
            </View>
        </View>
    );
};

export default FieldPicker;
