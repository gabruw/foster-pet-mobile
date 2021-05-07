//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const {
    ERROR: { DEFAULT }
} = COLOR;

const useStyles = () =>
    StyleSheet.create({
        text: {
            marginTop: 2,
            width: '100%',
            color: DEFAULT,
            fontWeight: 'bold',
            ...ALIGN.RIGHT
        }
    });

export default useStyles;
