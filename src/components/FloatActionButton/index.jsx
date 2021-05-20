//#region Imports

import COLOR from 'assets/styles/color';
import React from 'react';
import { FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';

//#endregion

const { LIGHT } = COLOR.BLUE.SHADOW;

const FloatActionButton = ({
    icon,
    children,
    size = 'small',
    isLoading = false,
    isDisabled = false,
    iconColor = '#FFFFFF',
    backgroundColor = LIGHT,
    ...rest
}) => {
    const styles = useStyles();

    return (
        <FAB
            iconRight
            upperCase
            size={size}
            title={children}
            placement='right'
            loading={isLoading}
            color={backgroundColor}
            titleStyle={styles.title}
            disabled={isLoading || isDisabled}
            icon={icon && <Icon solid name={icon} color={iconColor} size={18} />}
            {...rest}
        />
    );
};

export default FloatActionButton;
