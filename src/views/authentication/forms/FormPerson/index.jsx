//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import usePersonContext from 'storages/person/context';
import authenticationSchema from 'utils/validation/schemas/authentication';
import FieldsPerson from 'views/authentication/fields/FieldsPerson';
import { date } from 'yup/lib/locale';
import FieldsAuthentication from './../../fields/FieldsAuthentication';
import useStyles from './styles';

//#endregion

const FormPerson = () => {
    const styles = useStyles();
    const { isLoading } = usePersonContext();

    const {
        control,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(authenticationSchema)
    });

    const onSubmit = useCallback((data) => {
        data = { ...data, role: 'ADMIN', person: { ...date.person } };
        console.log('data', data);
    }, []);

    return (
        <View style={styles.container}>
            <FieldsAuthentication control={control} errors={errors} />
            <FieldsPerson control={control} errors={errors} setValue={setValue} />

            <Button
                mode='contained'
                loading={isLoading}
                disabled={isLoading}
                style={styles.submit}
                contentStyle={styles.submit}
                onPress={handleSubmit(onSubmit)}
            >
                Confirmar
            </Button>
        </View>
    );
};

export default FormPerson;
