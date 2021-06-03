//#region Imports

import { StyleSheet } from 'react-native';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        icon: {
            marginLeft: 8,
            ...ALIGN.LEFT
        }
    });

export default useStyles;
