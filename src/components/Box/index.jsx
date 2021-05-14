//#region Imports

import React, { useMemo } from 'react';
import { View } from 'react-native';
import clsx from 'utils/function/clsx';
import useStyles from './styles';

//#endregion

const Box = ({ children, style, paddingTop, paddingLeft, paddingRight, paddingBottom, ...rest }) => {
    const styles = useStyles(paddingTop, paddingLeft, paddingRight, paddingBottom);

    const boxStyles = useMemo(() => clsx({ [styles.box]: true, [style]: style }), [style]);

    return (
        <View style={boxStyles} {...rest}>
            {children}
        </View>
    );
};

export default Box;
