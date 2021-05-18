//#region Imports

import COLOR from 'assets/styles/color';
import React from 'react';
import { Button as ButtonNative } from 'react-native-elements';
import clsx from 'utils/functions/clsx';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.SHADOW;

const Button = ({
    color,
    children,
    fontSize,
    marginTop,
    backgoundColor,
    type = 'solid',
    invert = false,
    isLoading = false,
    isDisabled = false,
    loaderColor = DARKEST,
    ...rest
}) => {
    const styles = useStyles(invert, marginTop, fontSize, color, backgoundColor);

    const buttonStyle = clsx({
        [styles.solidButton]: type === 'solid',
        [styles.outlineButton]: type === 'outline'
    });

    return (
        <ButtonNative
            type={type}
            title={children}
            loading={isLoading}
            buttonStyle={buttonStyle}
            titleStyle={styles.title}
            containerStyle={styles.container}
            disabled={isLoading || isDisabled}
            loadingProps={{ color: loaderColor }}
            {...rest}
        />
    );
};

export default Button;
