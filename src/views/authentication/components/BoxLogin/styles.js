//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        top: {
            marginTop: 20,
            display: 'flex',
            marginBottom: 5,
            alignItems: 'center'
        },
        title: {
            fontSize: 40,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            fontFamily: 'Geomanist-Medium'
        },
        bottom: {
            marginTop: 20,
            marginLeft: 30,
            marginRight: 30,
            ...ALIGN.CENTER
        }
    });

export default useStyles;
