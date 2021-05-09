//#region Imports

import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const { LIGHT } = COLOR.BLUE.SHADOW;

const useStyles = (marginTop = 20, color = '#FFFFFF', backgroundColor = LIGHT) =>
    StyleSheet.create({
        container: {
            marginTop: marginTop
        },
        button: {
            height: 40
        },
        contained: {
            backgroundColor: backgroundColor
        },
        outlined: {
            borderColor: backgroundColor
        },
        rounded: {
            borderRadius: 18,
            borderTopWidth: 2,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderBottomWidth: 2
        },
        text: {
            color: color
        }
    });

export default useStyles;
