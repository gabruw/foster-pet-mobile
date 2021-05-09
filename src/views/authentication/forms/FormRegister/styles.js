//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1
        },
        fab: {
            right: 0,
            bottom: 20,
            position: 'absolute',
            color: '#FFF'
        }
    });

export default useStyles;
