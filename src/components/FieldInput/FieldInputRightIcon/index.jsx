//#region Imports

import COLOR from 'assets/styles/color';
import React, { Fragment, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import clsx from 'utils/function/clsx';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const RightIcon = ({ isLoading, isPassword, visible, setVisible }) => {
    const styles = useStyles();

    const rightIconStyles = useMemo(
        () =>
            clsx({
                [styles.icon]: true,
                [styles.right]: true
            }),
        [styles]
    );

    return (
        <Fragment>
            {isLoading && <ActivityIndicator size='small' color={DARKEST} style={styles.right} />}
            {isPassword && !isLoading && (
                <Icon
                    solid
                    size={18}
                    style={rightIconStyles}
                    name={visible ? 'eye' : 'eye-slash'}
                    onPress={() => setVisible((prevState) => !prevState)}
                />
            )}
        </Fragment>
    );
};

export default RightIcon;
