//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        fullModal: {
            margin: 0
        },
        container: {
            flex: 1,
            margin: 0,
            borderRadius: 2,
            backgroundColor: '#FFFFFF'
        },
        radius: {
            borderRadius: 5
        },
        header: {
            padding: 10,
            paddingBottom: 0,
            flexDirection: 'row'
        },
        alignLeft: {
            ...ALIGN.LEFT
        },
        alignRight: {
            ...ALIGN.RIGHT
        }
    });

export default useStyles;
