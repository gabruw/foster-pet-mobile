//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import { Dimensions, StyleSheet } from 'react-native';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const useStyles = () =>
    StyleSheet.create({
        container: {
            marginTop: 5,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5
        },
        pickerContainer: {
            borderWidth: 2,
            borderRadius: 5,
            flexDirection: 'row',
            borderColor: DARKEST,
            backgroundColor: '#FFFFFF',
            ...ALIGN.BETWEEN
        },
        containerPicker: {
            borderRadius: 4,
            width: Dimensions.get('window').width - 125,
            ...ALIGN.RIGHT
        },
        picker: {
            height: 50,
            fontSize: 16,
            width: '100%',
            borderColor: 'transparent',
            backgroundColor: '#FFFFFF',
            fontFamily: 'Geomanist-Medium'
        }
    });

export default useStyles;
