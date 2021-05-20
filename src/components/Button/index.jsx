//#region Imports

import COLOR from 'assets/styles/color';
import React from 'react';
import { Button as ButtonNative } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import clsx from 'utils/functions/clsx';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.SHADOW;

const Button = ({
    icon,
    color,
    children,
    fontSize,
    marginTop,
    backgoundColor,
    type = 'solid',
    invert = false,
    iconLeft = false,
    iconRight = false,
    isLoading = false,
    isDisabled = false,
    iconColor = '#FFFFFF',
    loaderColor = DARKEST,
    ...rest
}) => {
    const styles = useStyles(invert, marginTop, fontSize, color, backgoundColor);

    const buttonStyle = clsx({
        [styles.solidButton]: type === 'solid',
        [styles.outlineButton]: type === 'outline'
    });

    const iconStyle = clsx({
        [styles.iconLeft]: iconLeft,
        [styles.iconRight]: iconRight
    });

    return (
        <ButtonNative
            type={type}
            title={children}
            loading={isLoading}
            iconLeft={iconLeft}
            iconRight={iconRight}
            buttonStyle={buttonStyle}
            titleStyle={styles.title}
            containerStyle={styles.container}
            disabled={isLoading || isDisabled}
            loadingProps={{ color: loaderColor }}
            icon={() => icon && <Icon size={16} name={icon} color={iconColor} style={iconStyle} />}
            {...rest}
        />
    );
};

export default Button;
