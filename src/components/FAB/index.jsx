//#region Imports

import COLOR from 'assets/styles/color';
import React from 'react';
import { FAB as FloatActionButton } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';

//#endregion

const { LIGHT } = COLOR.BLUE.SHADOW;

const FAB = ({
    icon,
    children,
    isLoading = false,
    isDisabled = false,
    iconColor = '#FFFFFF',
    backgroundColor = LIGHT,
    ...rest
}) => {
    const styles = useStyles();

    return (
        <FloatActionButton
            iconRight
            upperCase
            size='small'
            title={children}
            loading={isLoading}
            color={backgroundColor}
            titleStyle={styles.title}
            containerStyle={styles.container}
            disabled={isLoading || isDisabled}
            icon={<Icon solid name={icon} color={iconColor} size={18} />}
            {...rest}
        />
    );
};

export default FAB;
