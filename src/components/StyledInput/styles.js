//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        text: {
            marginTop: 2,
            width: '100%',
            fontWeight: 'bold',
            color: COLOR.ERROR.DEFAULT,
            textShadow: '-1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF',
            ...ALIGN.RIGHT
        }
    });

export default useStyles;
