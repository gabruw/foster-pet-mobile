//#region Imports

import COLOR from 'assets/styles/color';
import React, { Fragment } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const RightIcon = ({ isLoading, isPassword, visible, setVisible }) => {
    const styles = useStyles();

    return (
        <Fragment>
            {isLoading && <ActivityIndicator size='small' color={DARKEST} />}
            {isPassword && !isLoading && (
                <Icon
                    solid
                    size={18}
                    style={styles.icon}
                    name={visible ? 'eye' : 'eye-slash'}
                    onPress={() => setVisible((prevState) => !prevState)}
                />
            )}
        </Fragment>
    );
};

export default RightIcon;
