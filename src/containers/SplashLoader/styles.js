//#region Imports

import { StyleSheet } from 'react-native';
import FONT from '../../assets/styles/font';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        view: {
            flex: 1,
            ...FONT.REGULAR
        }
    });

export default useStyles;
