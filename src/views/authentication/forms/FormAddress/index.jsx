//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import ButtonContained from 'components/ButtonContained';
import SubTitleDivider from 'components/SubTitleDivider';
import FieldsAddress from 'fields/FieldsAddress';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import useAddressContext from 'storages/address/context';
import addressSchema from 'utils/validation/schemas/address';
import useStyles from './styles';

//#endregion

const FormAddress = () => {
    const styles = useStyles();
    const { isLoading } = useAddressContext();

    const {
        control,
        getValues,
        handleSubmit,
        formState: { errors }
    } = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(addressSchema)
    });

    const onSubmit = useCallback((data) => {
        console.log('data', data);
    }, []);

    return (
        <View style={styles.content}>
            <SubTitleDivider text='Endereço' />
            <FieldsAddress control={control} errors={errors} getValues={getValues} />

            <ButtonContained marginTop={5} loading={isLoading} disabled={isLoading} onPress={handleSubmit(onSubmit)}>
                Concluir
            </ButtonContained>
        </View>
    );
};

export default FormAddress;
