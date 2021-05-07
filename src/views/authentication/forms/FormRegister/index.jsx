//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import StateButtonGroup from 'components/ButtonGroup/StateButtonGroup';
import SubTitleDivider from 'components/SubTitleDivider';
import FieldsAuthentication from 'fields/FieldsAuthentication';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { FAB } from 'react-native-paper';
import usePersonContext from 'storages/person/context';
import { DEFAULT_VALUE, FORM_REGISTER_VALUES, SCHEMA } from 'utils/constants/module/form-register';
import ModuleFormRegister from './ModuleFormRegister';
import useStyles from './styles';

//#endregion

const FormRegister = ({ setIsFormRegister }) => {
    const styles = useStyles();
    const [form, setForm] = useState(DEFAULT_VALUE);

    const { isLoading } = usePersonContext();
    const schema = useMemo(() => SCHEMA[form], [form]);

    const {
        control,
        setValue,
        clearErrors,
        handleSubmit,
        formState: { errors }
    } = useForm({
        reValidateMode: 'onBlur'
        // resolver: yupResolver(schema)
    });

    useEffect(() => {
        if (errors) {
            clearErrors();
        }
    }, [form]);

    const onSubmit = useCallback(
        (data) => {
            console.log('data', data);
            setIsFormRegister(false);
        },
        [setIsFormRegister]
    );

    return (
        <View style={styles.content}>
            <SubTitleDivider text='Autenticação' />
            <FieldsAuthentication control={control} errors={errors} />

            <View style={styles.container}>
                <StateButtonGroup get={form} set={setForm} values={FORM_REGISTER_VALUES} />
                <ModuleFormRegister form={form} control={control} errors={errors} setValue={setValue} />
            </View>

            <FAB
                small
                color='#FFFFFF'
                icon='arrow-right'
                style={styles.fab}
                loading={isLoading}
                disabled={isLoading}
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    );
};

export default FormRegister;
