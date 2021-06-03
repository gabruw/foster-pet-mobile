//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const { ERROR, PURPLE, BLUE } = COLOR;

const useStyles = () =>
    StyleSheet.create({
        container: {
            marginTop: 5,
            width: '100%',
            paddingLeft: 0,
            paddingRight: 0
        },
        input: {
            width: '100%'
        },
        inputContainer: {
            height: 55,
            width: '100%',
            borderWidth: 2,
            borderRadius: 5,
            borderBottomWidth: 3,
            backgroundColor: '#FFFFFF'
        },
        inputContainerOnBlur: {
            borderColor: PURPLE.PRIMARY.DARKEST
        },
        inputContainerOnFocus: {
            borderColor: BLUE.SHADOW.LIGHT
        },
        error: {
            margin: 0,
            fontSize: 14,
            marginTop: 5,
            width: '100%',
            marginBottom: 5,
            color: ERROR.DEFAULT,
            ...FONT.MEDIUM,
            ...ALIGN.RIGHT
        }
    });

export default useStyles;
