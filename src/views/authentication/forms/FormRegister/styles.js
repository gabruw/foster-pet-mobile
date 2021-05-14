//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1
        },
        box: {
            marginTop: 20
        },
        fab: {
            left: 100,
            bottom: 15
        }
    });

export default useStyles;
