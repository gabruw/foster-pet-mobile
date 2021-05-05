//#region Imports

import { StyleSheet } from 'react-native';
import COLOR from 'assets/styles/color';

//#endregion

const { LIGHT } = COLOR.PURPLE;

const useStyles = () =>
    StyleSheet.create({
        container: {
            marginLeft: 30,
            marginRight: 30
        },
        buttonGroup: {
            marginTop: 10,
            marginBottom: 10
        },
        submit: {
            height: 40,
            backgroundColor: LIGHT
        }
    });

export default useStyles;
