//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const { DEFAULT } = COLOR.ERROR;

const useStyles = () =>
    StyleSheet.create({
        error: {
            marginTop: 2,
            width: '100%',
            color: DEFAULT,
            fontWeight: 'bold',
            ...ALIGN.RIGHT
        }
    });

export default useStyles;
