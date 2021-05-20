//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = (paddingTop = 10, paddingLeft = 10, paddingRight = 10, paddingBottom = 30) =>
    StyleSheet.create({
        box: {
            borderRadius: 4,
            paddingTop: paddingTop,
            paddingLeft: paddingLeft,
            backgroundColor: '#FFFFFF',
            paddingRight: paddingRight,
            paddingBottom: paddingBottom
        }
    });

export default useStyles;
