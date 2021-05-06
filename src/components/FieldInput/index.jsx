//#region Imports

import React, { useMemo } from 'react';
import { useController } from 'react-hook-form';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import useStyles from './styles';

//#endregion

const FieldInput = ({ name, control, errors, outlineColor = '#000000', defaultValue = '', ...rest }) => {
    const styles = useStyles();

    const { field } = useController({
        name,
        control,
        defaultValue
    });

    const error = useMemo(() => errors && errors[name] && errors[name].message, [errors]);

    return (
        <View>
            <TextInput
                {...rest}
                error={error}
                mode='outlined'
                value={field.value}
                onChangeText={field.onChange}
                theme={{
                    colors: {
                        primary: outlineColor
                    }
                }}
            />
            <Text style={styles.text}>{error}</Text>
        </View>
    );
};

export default FieldInput;
