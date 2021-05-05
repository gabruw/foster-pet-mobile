//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = (alert) =>
    StyleSheet.create({
        snackbar: {
            backgroundColor: alert ? '#ebd767' : '#ed7877'
        },
        continer: {
            display: 'flex',
            marginTop: '-14px',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '-14px'
        }
    });

export default useStyles;
