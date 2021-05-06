//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import SubTitleDivider from 'components/SubTitleDivider';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import usePersonContext from 'storages/person/context';
import authenticationSchema from 'utils/validation/schemas/authentication';
import FieldsAddress from 'views/authentication/fields/FieldsAddress';
import FieldsCompany from 'views/authentication/fields/FieldsCompany';
import FieldsPerson from 'views/authentication/fields/FieldsPerson';
import { date } from 'yup/lib/locale';
import FieldsAuthentication from '../../fields/FieldsAuthentication';
import useStyles from './styles';

//#endregion

const FormRegister = () => {
    const styles = useStyles();
    const { isLoading } = usePersonContext();

    const {
        control,
        setValue,
        getValues,
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
        <View style={styles.content}>
            <SubTitleDivider text='Autenticação' />
            <View style={styles.container}>
                <FieldsAuthentication control={control} errors={errors} />
            </View>

            <SubTitleDivider text='Empresa' />
            <View style={styles.container}>
                <FieldsCompany control={control} errors={errors} />
            </View>

            <SubTitleDivider text='Pessoa' />
            <View style={styles.container}>
                <FieldsPerson control={control} errors={errors} setValue={setValue} />
            </View>

            <SubTitleDivider text='Endereço' />
            <View style={styles.container}>
                <FieldsAddress control={control} errors={errors} getValues={getValues} />
            </View>

            <View style={styles.container}>
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
        </View>
    );
};

export default FormRegister;
