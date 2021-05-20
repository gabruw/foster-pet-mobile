//#region Imports

import COLOR from 'assets/styles/color';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

//#endregion

const { LIGHT } = COLOR.BLUE.SHADOW;

const useStyles = (invert, marginTop = 20, fontSize = 16, color = '#FFFFFF', backgroundColor = LIGHT) => {
    const titleColor = useMemo(() => (invert ? backgroundColor : color), [invert]);
    const borderAndBackground = useMemo(() => (invert ? color : backgroundColor), [invert]);

    return StyleSheet.create({
        container: {
            width: '100%',
            marginTop: marginTop
        },
        iconLeft: {
            marginRight: 8
        },
        iconRight: {
            marginLeft: 8
        },
        solidButton: {
            backgroundColor: borderAndBackground
        },
        outlineButton: {
            borderRadius: 40,
            borderTopWidth: 2,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderBottomWidth: 2,
            borderColor: borderAndBackground
        },
        title: {
            color: titleColor,
            fontSize: fontSize,
            textTransform: 'uppercase',
            fontFamily: 'Geomanist-Medium'
        }
    });
};

export default useStyles;
