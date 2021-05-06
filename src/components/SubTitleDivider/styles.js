//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = (color = '#FFFFFF') =>
    StyleSheet.create({
        content: {},
        text: {
            fontSize: 20,
            width: '100%',
            marginBottom: 5,
            color: color,
            ...ALIGN.LEFT
        },
        divider: {
            height: 3,
            backgroundColor: color
        }
    });

export default useStyles;
