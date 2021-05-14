//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = (color = '#FFFFFF', marginTop = 5, marginBottom = 5) =>
    StyleSheet.create({
        content: {
            marginTop: marginTop,
            marginBottom: marginBottom
        },
        text: {
            color: color,
            fontSize: 20,
            width: '100%',
            marginBottom: 5,
            fontFamily: 'Geomanist-Medium',
            ...ALIGN.LEFT
        },
        divider: {
            height: 3,
            backgroundColor: color
        }
    });

export default useStyles;
