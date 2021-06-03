//#region Imports

import FieldLabel from 'components/FieldLabel';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { Input } from 'react-native-elements';
import useFormContext from 'storages/form/context';
import clsx from 'utils/functions/clsx';
import extractDeepNameFromObjects from 'utils/functions/extractDeepNameFromObjects';
import FieldInputLeftIcon from './FieldInputLeftIcon';
import FieldInputRightIcon from './FieldInputRightIcon';
import useStyles from './styles';

//#endregion

const FieldInput = ({
    name,
    icon,
    mask,
    color,
    label,
    onBlur,
    onFocus,
    labelColor,
    placeholder,
    isRequired = true,
    isLoading = false,
    isDisabled = false,
    isIconSolid = true,
    isPassword = false,
    ...rest
}) => {
    const styles = useStyles();
    const inputRef = useRef(null);

    const {
        control,
        formState: { errors }
    } = useFormContext();

    const [isFocused, setIsFocused] = useState(false);
    const [visible, setVisible] = useState(isPassword);

    const { field } = useController({ name, control });

    const error = useMemo(() => {
        const value = extractDeepNameFromObjects(name, errors);
        if (value) {
            inputRef.current.shake();
            return value.message;
        }
        return value;
    }, [name, errors]);

    const handleChange = useCallback(
        (text) => {
            const value = mask ? mask(text) : text;
            field.onChange(value);

            return value;
        },
        [field, mask]
    );

    const handleBlur = useCallback(() => {
        setIsFocused(false);
        onBlur && onBlur();
    }, [onBlur]);

    const handleFocus = useCallback(() => {
        setIsFocused(true);
        onFocus && onFocus();
    }, [onFocus]);

    const inputContainerStyles = useMemo(
        () =>
            clsx({
                [styles.inputContainer]: true,
                [styles.inputContainerOnBlur]: !isFocused,
                [styles.inputContainerOnFocus]: isFocused
            }),
        [styles, isFocused]
    );

    return (
        <Input
            ref={inputRef}
            value={field.value}
            errorMessage={error}
            inputStyle={styles.input}
            errorStyle={styles.error}
            secureTextEntry={visible}
            onBlur={() => handleBlur()}
            onFocus={() => handleFocus()}
            containerStyle={styles.container}
            disabled={isDisabled || isLoading}
            placeholder={placeholder || label}
            inputContainerStyle={inputContainerStyles}
            onChangeText={(text) => handleChange(text)}
            leftIcon={<FieldInputLeftIcon icon={icon} isIconSolid={isIconSolid} />}
            label={<FieldLabel label={label} labelColor={labelColor} isRequired={isRequired} />}
            rightIcon={
                <FieldInputRightIcon
                    visible={visible}
                    isLoading={isLoading}
                    isPassword={isPassword}
                    setVisible={setVisible}
                />
            }
            {...rest}
        />
    );
};

export default FieldInput;
