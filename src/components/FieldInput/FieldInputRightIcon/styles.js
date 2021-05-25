//#region Imports

import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const useStyles = () =>
    StyleSheet.create({
        icon: {
            color: DARKEST
        },
        right: {
            paddingRight: 10
        }
    });

export default useStyles;
