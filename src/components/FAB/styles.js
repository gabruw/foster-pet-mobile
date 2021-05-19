//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            position: 'absolute'
        },
        title: {
            fontFamily: 'Geomanist-Medium',
            fontSize: 14
        }
    });

export default useStyles;