//#region Imports

import { StyleSheet } from 'react-native';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        icon: {
            width: 50,
            marginLeft: 10,
            marginRight: 8,
            ...ALIGN.CENTER,
            overflow: 'visible',
            alignItems: 'center'
        }
    });

export default useStyles;
