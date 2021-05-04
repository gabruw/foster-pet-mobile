//#region Imports

import { StyleSheet } from 'react-native';
import COLOR from 'assets/styles/color';

//#endregion

const {
    BLUE: { MEDIUM, LIGHT }
} = COLOR;

const useStyles = (backgroundColor = LIGHT, backgroundColorActived = MEDIUM) =>
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
            backgroundColor: backgroundColor
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
            backgroundColor: backgroundColorActived
        },
        radioGroup: {
            display: 'none'
        }
    });

export default useStyles;
