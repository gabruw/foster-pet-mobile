//#region Imports

import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const useStyles = () =>
    StyleSheet.create({
        left: {
            marginLeft: 10,
            marginRight: 5,
            color: DARKEST
        }
    });

export default useStyles;
