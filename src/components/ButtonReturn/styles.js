//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            ...ALIGN.LEFT
        },
        arrow: {
            marginTop: 10,
            marginLeft: 18,
            marginBottom: 5
        }
    });

export default useStyles;
