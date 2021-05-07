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
        fab: {
            right: 0,
            bottom: 20,
            position: 'absolute',
            color: '#FFF'
        }
    });

export default useStyles;
