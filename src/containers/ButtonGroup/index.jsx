//#region Imports

import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View } from 'react-native';
import ButtonRadioGroup from './ButtonRadioGroup';
import ButtonRoundnessGroup from './ButtonRoundnessGroup';
import useStyles from './ButtonRoundnessGroup/styles';

//#endregion

const ButtonGroup = ({ values = [], backgroundColor }, ref) => {
    const styles = useStyles(backgroundColor);
    const [active, setActive] = useState(values.length > 0 && values[0].value);

    useImperativeHandle(ref, () => ({
        value: active
    }));

    return (
        <View style={styles.container}>
            <ButtonRoundnessGroup
                values={values}
                active={active}
                setActive={setActive}
                backgroundColor={backgroundColor}
            />

            <ButtonRadioGroup values={values} active={active} setActive={setActive} />
        </View>
    );
};

export default forwardRef(ButtonGroup);
