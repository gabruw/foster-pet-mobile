//#region Imports

import React, { useState, useEffect, useMemo } from 'react';
import { Snackbar, IconButton } from 'react-native-paper';
import { View } from 'react-native';
import useStyles from './styles';

//#endregion

const SnackbarError = ({ errors = [], alert = false }) => {
    const styles = useStyles(alert);
    const [visible, setVisible] = useState(false);

    const textColor = useMemo(() => (alert ? '#000000' : '#FFFFFF'), [alert]);
    const icon = useMemo(() => (alert ? 'alert-outline' : 'alert-circle-outline'), [alert]);

    useEffect(() => {
        setVisible(errors && errors.length > 0);
    }, [errors]);

    return (
        <Snackbar
            visible={visible}
            style={styles.snackbar}
            action={{ label: 'Ocultar' }}
            onDismiss={() => setVisible(false)}
            theme={{ colors: { accent: textColor, surface: textColor } }}
        >
            <View style={styles.continer}>
                <IconButton style={styles.icon} icon={icon} size={20} color={textColor} />
                {errors && errors.map((error) => error)}
            </View>
        </Snackbar>
    );
};

export default SnackbarError;
