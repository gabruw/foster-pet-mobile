//#region Imports

import COLOR from 'assets/styles/color';
import React, { Fragment, useMemo } from 'react';
import { useController } from 'react-hook-form';
import { Text, TextInput } from 'react-native-paper';
import extractDeepNameFromObjects from 'utils/function/extractDeepNameFromObjects';
import useStyles from './styles';
import { ActivityIndicator } from 'react-native';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const FieldInput = ({
    name,
    icon,
    mask,
    errors,
    control,
    isLoading = true,
    isDisabled = false,
    outlineColor = '#000000',
    ...rest
}) => {
    const styles = useStyles();

    const { field } = useController({
        name,
        control
    });

    const error = useMemo(() => {
        const value = extractDeepNameFromObjects(name, errors);
        return value && value.message;
    }, [name, errors]);

    const handleChange = (text) => {
        const value = mask ? mask(text) : text;
        field.onChange(value);

        return value;
    };

    return (
        <Fragment>
            <TextInput
                {...rest}
                error={error}
                mode='outlined'
                value={field.value}
                theme={{
                    colors: {
                        primary: outlineColor
                    }
                }}
                onChangeText={(text) => handleChange(text)}
                left={
                    isLoading ? (
                        <ActivityIndicator size='small' color={DARKEST} />
                    ) : (
                        icon && <TextInput.Icon name={icon} color={DARKEST} />
                    )
                }
            />

            <Text style={styles.error}>{error}</Text>
        </Fragment>
    );
};

export default FieldInput;
