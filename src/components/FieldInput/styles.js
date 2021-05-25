//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const { ERROR, PURPLE, BLUE } = COLOR;

const useStyles = () =>
    StyleSheet.create({
        container: {
            marginTop: 5,
            paddingLeft: 0,
            paddingRight: 0,
            width: '100%'
        },
        input: {
            height: 55,
            borderWidth: 2,
            borderRadius: 5,
            borderBottomWidth: 3,
            backgroundColor: '#FFFFFF'
        },
        inputOnBlur: {
            borderColor: PURPLE.PRIMARY.DARKEST
        },
        inputOnFocus: {
            borderColor: BLUE.SHADOW.LIGHT
        },
        error: {
            margin: 0,
            marginTop: 5,
            fontSize: 14,
            width: '100%',
            marginBottom: 5,
            color: ERROR.DEFAULT,
            fontFamily: 'Geomanist-Medium',
            ...ALIGN.RIGHT
        }
    });

export default useStyles;
