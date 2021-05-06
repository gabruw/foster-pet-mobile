//#region Imports

import React from 'react';
import { View } from 'react-native';
import ButtonRadioGroup from '../components/ButtonRadioGroup';
import ButtonRoundnessGroup from '../components/ButtonRoundnessGroup';
import useStyles from '../styles';

//#endregion

const StateButtonGroup = ({ values = [], get, set, backgroundColor }) => {
    const styles = useStyles(backgroundColor);

    return (
        <View style={styles.container}>
            <ButtonRoundnessGroup active={get} setActive={set} values={values} backgroundColor={backgroundColor} />
            <ButtonRadioGroup values={values} active={get} setActive={set} />
        </View>
    );
};

export default StateButtonGroup;
