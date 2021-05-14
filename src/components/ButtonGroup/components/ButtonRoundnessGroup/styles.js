//#region Imports

import { StyleSheet } from 'react-native';
import COLOR from 'assets/styles/color';

//#endregion

const { LIGHT } = COLOR.BLUE.SHADOW;

const useStyles = (backgroundColor = LIGHT) =>
    StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonContainer: {
            flex: 1
        },
        button: {
            borderTopWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderBottomWidth: 3,
            borderColor: backgroundColor,
            backgroundColor: 'transparent'
        },
        withoutRadius: {
            borderRadius: 0
        },
        startRadius: {
            borderTopLeftRadius: 4,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 0
        },
        endRadius: {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 4
        },
        active: {
            backgroundColor: backgroundColor
        },
        text: {
            fontFamily: 'Geomanist-Medium'
        },
        textActive: {
            color: '#FFFFFF'
        },
        textUnactive: {
            color: backgroundColor
        }
    });

export default useStyles;
