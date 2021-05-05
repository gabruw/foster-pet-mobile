//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        topContent: {
            marginTop: 80,
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
        midContent: {
            marginLeft: 30,
            marginRight: 30
        },
        text: {
            fontSize: 20,
            width: '100%',
            marginBottom: 5,
            color: '#FFFFFF',
            ...ALIGN.LEFT
        },
        divider: {
            height: 3,
            backgroundColor: '#FFFFFF'
        },
        bottomContent: {
            marginTop: 2
        },
        withoutAccount: {
            fontSize: 16,
            marginTop: 20,
            color: '#FFFFFF',
            fontWeight: '500',
            ...ALIGN.CENTER
        },
        register: {
            color: '#FFFFFF',
            fontWeight: '600',
            textDecorationLine: 'underline'
        }
    });

export default useStyles;
