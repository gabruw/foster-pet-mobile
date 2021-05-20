//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            ...ALIGN.CENTER
        },
        title: {
            fontSize: 40,
            color: '#FFFFFF',
            marginBottom: 30,
            fontFamily: 'Geomanist-Medium'
        }
    });

export default useStyles;
