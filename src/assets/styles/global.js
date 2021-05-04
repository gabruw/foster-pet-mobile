//#region Imports

import { StyleSheet } from 'react-native';
import FONT from './font';

//#endregion

const useGlobalStyles = () =>
    StyleSheet.create({
        view: {
            flex: 1,
            ...FONT.REGULAR
        }
    });

export default useGlobalStyles;
