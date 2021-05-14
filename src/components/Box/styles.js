//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = (paddingTop = 10, paddingLeft = 10, paddingRight = 10, paddingBottom = 30) =>
    StyleSheet.create({
        box: {
            marginLeft: 20,
            borderRadius: 4,
            marginRight: 20,
            paddingTop: paddingTop,
            paddingLeft: paddingLeft,
            backgroundColor: '#FFFFFF',
            paddingRight: paddingRight,
            paddingBottom: paddingBottom
        }
    });

export default useStyles;
