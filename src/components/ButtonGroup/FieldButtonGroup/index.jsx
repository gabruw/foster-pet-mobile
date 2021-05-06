//#region Imports

import React from 'react';
import { useController } from 'react-hook-form';
import { View } from 'react-native';
import ButtonRadioGroup from '../components/ButtonRadioGroup';
import ButtonRoundnessGroup from '../components/ButtonRoundnessGroup';
import useStyles from '../styles';

//#endregion

const FieldButtonGroup = ({ values = [], name, control, defaultValue, backgroundColor }) => {
    const styles = useStyles(backgroundColor);

    const { field } = useController({
        name,
        control,
        defaultValue: defaultValue ? defaultValue : values.length > 0 && values[0].value
    });

    return (
        <View style={styles.container}>
            <ButtonRoundnessGroup
                values={values}
                active={field.value}
                setActive={field.onChange}
                backgroundColor={backgroundColor}
            />

            <ButtonRadioGroup values={values} active={field.value} setActive={field.onChange} />
        </View>
    );
};

export default FieldButtonGroup;
