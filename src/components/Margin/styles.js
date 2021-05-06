//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const PADDING = 30;

const useStyles = (paddingTop = PADDING, paddingLeft = PADDING, paddingRight = PADDING, paddingBottom = PADDING) =>
    StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: paddingTop,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            paddingBottom: paddingBottom
        }
    });

export default useStyles;
