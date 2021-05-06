//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        top: {
            marginTop: 50,
            display: 'flex',
            marginBottom: 20,
            alignItems: 'center'
        },
        logo: {
            width: 80,
            height: 100,
            resizeMode: 'stretch'
        },
        title: {
            fontSize: 40,
            color: '#FFFFFF',
            textTransform: 'uppercase'
        },
        bottom: {
            marginTop: 60,
            ...ALIGN.CENTER
        }
    });

export default useStyles;
