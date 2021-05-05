//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import useAddressContext from 'storages/address/context';
import useCompanyContext from 'storages/company/context';
import authenticationSchema from 'utils/validation/schemas/authentication';
import FieldsAddress from 'views/authentication/fields/FieldsAddress';
import FieldsCompany from 'views/authentication/fields/FieldsCompany';
import { date } from 'yup/lib/locale';
import FieldsAuthentication from '../../fields/FieldsAuthentication';
import useStyles from './styles';

//#endregion

const FormCompany = () => {
    const styles = useStyles();
    const datePickerRef = useRef(null);
    const { isLoading } = useCompanyContext();
    const { address } = useAddressContext();

    const {
        control,
        getValues,
        handleSubmit,
        formState: { errors }
    } = useForm({
        reValidateMode: 'onBlur',
        defaultValues: address ? address : {},
        resolver: yupResolver(authenticationSchema)
    });
    console.log('address 1', address);
    console.log('control', control);

    const onSubmit = useCallback(
        (data) => {
            data = { ...data, role: 'ADMIN', person: { ...date.person, birthDate: datePickerRef.current.value } };
            console.log('data', data);
        },
        [datePickerRef]
    );

    return (
        <View style={styles.container}>
            <FieldsAuthentication control={control} errors={errors} />
            <FieldsCompany control={control} errors={errors} />
            <FieldsAddress control={control} errors={errors} getValues={getValues} />

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

export default FormCompany;
