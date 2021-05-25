//#region Imports

import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const useStyles = () =>
    StyleSheet.create({
        left: {
            color: DARKEST,
            paddingLeft: 8
        }
    });

export default useStyles;
