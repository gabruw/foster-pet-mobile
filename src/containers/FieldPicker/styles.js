//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const useStyles = () =>
    StyleSheet.create({
        container: {
            marginTop: 5,
            marginBottom: 5
        },
        content: {
            width: '100%',
            borderWidth: 2,
            borderRadius: 5,
            borderColor: DARKEST,
            backgroundColor: '#FFFFFF',
            ...ALIGN.BETWEEN
        },
        containerPicker: {
            width: '100%',
            borderRadius: 4,
            ...ALIGN.CENTER
        },
        picker: {
            height: 50,
            fontSize: 18,
            width: '100%',
            borderColor: 'transparent',
            backgroundColor: '#FFFFFF',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        },
        loader: {
            marginLeft: 8,
            marginRight: 8,
            ...ALIGN.RIGHT
        }
    });

export default useStyles;
