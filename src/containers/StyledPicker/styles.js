//#region Imports

import { Dimensions, StyleSheet } from 'react-native';

//#endregion

const useStyles = (outlineColor = 'rgba(0, 0, 0, 0.54)') =>
    StyleSheet.create({
        view: {
            borderWidth: 1,
            borderRadius: 4,
            display: 'flex',
            marginBottom: 20,
            flexDirection: 'row',
            borderColor: outlineColor,
            justifyContent: 'space-between',
            backgroundColor: 'rgb(246, 246, 246)'
        },
        iconView: {
            width: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
        },
        icon: {
            width: 50,
            height: 55,
            display: 'flex',
            overflow: 'visible',
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
        },
        pickerView: {
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: Dimensions.get('window').width - 95
        },
        picker: {
            height: 60,
            fontSize: 16,
            width: '100%',
            borderColor: 'transparent',
            fontFamily: 'Geomanist-Medium',
            backgroundColor: 'rgb(246, 246, 246)'
        }
    });

export default useStyles;
