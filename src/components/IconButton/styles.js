//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        button: {
            borderRadius: 25
        },
        container: {
            marginTop: 10,
            marginLeft: 18,
            marginBottom: 5
        },
        icon: {
            marginLeft: 2,
            marginRight: 2
        }
    });

export default useStyles;
