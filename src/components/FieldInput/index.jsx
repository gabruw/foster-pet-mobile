//#region Imports

import FieldLabel from 'components/FieldLabel';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { Input } from 'react-native-elements';
import clsx from 'utils/function/clsx';
import extractDeepNameFromObjects from 'utils/function/extractDeepNameFromObjects';
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
    errors,
    onBlur,
    control,
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

    const inputStyles = useMemo(
        () =>
            clsx({
                [styles.input]: true,
                [styles.inputOnBlur]: !isFocused,
                [styles.inputOnFocus]: isFocused
            }),
        [styles, isFocused]
    );

    return (
        <Input
            ref={inputRef}
            value={field.value}
            errorMessage={error}
            errorStyle={styles.error}
            secureTextEntry={visible}
            onBlur={() => handleBlur()}
            onFocus={() => handleFocus()}
            containerStyle={styles.container}
            inputContainerStyle={inputStyles}
            disabled={isDisabled || isLoading}
            placeholder={placeholder || label}
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
