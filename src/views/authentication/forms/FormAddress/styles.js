//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        content: {
            flex: 1
        },
        container: {
            marginTop: 15,
            marginBottom: 5
        },
        button: {
            marginLeft: 10,
            marginRight: 10
        }
    });

export default useStyles;
