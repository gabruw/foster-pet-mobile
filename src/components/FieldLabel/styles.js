//#region Imports

import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const { DEFAULT } = COLOR.ERROR;

const useStyles = (labelColor = '#000000') =>
    StyleSheet.create({
        label: {
            fontSize: 16,
            marginBottom: 5,
            color: labelColor,
            fontFamily: 'Geomanist-Medium'
        },
        required: {
            color: DEFAULT
        }
    });

export default useStyles;
