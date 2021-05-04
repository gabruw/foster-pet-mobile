//#region Imports

import { DefaultTheme, configureFonts } from 'react-native-paper';

//#endregion

const fonts = {
    web: {
        regular: {
            fontFamily: 'Geomanist-Medium',
            fontWeight: 'normal'
        },
        medium: {
            fontFamily: 'Geomanist-Bold',
            fontWeight: 'normal'
        },
        light: {
            fontFamily: 'Geomanist-Light',
            fontWeight: 'normal'
        },
        thin: {
            fontFamily: 'Geomanist-Thin',
            fontWeight: 'normal'
        }
    },
    ios: {
        regular: {
            fontFamily: 'Geomanist-Medium',
            fontWeight: 'normal'
        },
        medium: {
            fontFamily: 'Geomanist-Bold',
            fontWeight: 'normal'
        },
        light: {
            fontFamily: 'Geomanist-Light',
            fontWeight: 'normal'
        },
        thin: {
            fontFamily: 'Geomanist-Thin',
            fontWeight: 'normal'
        }
    },
    android: {
        regular: {
            fontFamily: 'Geomanist-Medium',
            fontWeight: 'normal'
        },
        medium: {
            fontFamily: 'Geomanist-Bold',
            fontWeight: 'normal'
        },
        light: {
            fontFamily: 'Geomanist-Light',
            fontWeight: 'normal'
        },
        thin: {
            fontFamily: 'Geomanist-Thin',
            fontWeight: 'normal'
        }
    }
};

const THEME = {
    ...DefaultTheme,
    fonts: configureFonts(fonts)
};

export default THEME;
