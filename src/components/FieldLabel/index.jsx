//#region Imports

import React, { Fragment } from 'react';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const FieldLabel = ({ label, labelColor, isRequired }) => {
    const styles = useStyles(labelColor);

    return (
        <Text style={styles.label}>
            {!isRequired ? (
                label
            ) : (
                <Fragment>
                    {label} <Text style={styles.required}>*</Text>
                </Fragment>
            )}
        </Text>
    );
};

export default FieldLabel;
