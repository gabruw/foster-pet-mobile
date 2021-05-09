//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import SubTitleDivider from 'components/SubTitleDivider';
import FieldsAuthentication from 'fields/FieldsAuthentication';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { FAB } from 'react-native-paper';
import useAuthenticationContext from 'storages/authentication/context';
import useCompanyContext from 'storages/company/context';
import usePersonContext from 'storages/person/context';
import { FORM_REGISTER_SCHEMA, FORM_REGISTER_VALUES } from 'utils/constants/module/form-register';
import validateDefaultValues from 'utils/function/validateDefaultValues';
import ModuleFormRegister from './ModuleFormRegister';
import useStyles from './styles';

//#endregion

const FormRegister = ({ setIsFormRegister }) => {
    const styles = useStyles();

    const { isLoading: personLoading } = usePersonContext();
    const { isLoading: companyLoading } = useCompanyContext();
    const { authentication, setAuthentication } = useAuthenticationContext();

    const [form, setForm] = useState(FORM_REGISTER_VALUES.PERSON.value);
    const schema = useMemo(() => FORM_REGISTER_SCHEMA[form], [form]);

    const {
        control,
        setValue,
        clearErrors,
        handleSubmit,
        formState: { errors }
    } = useForm({
        reValidateMode: 'onBlur',
        // resolver: yupResolver(schema),
        defaultValues: validateDefaultValues(authentication)
    });

    useEffect(() => {
        if (errors) {
            clearErrors();
        }
    }, [form]);

    const onSubmit = useCallback(
        (data) => {
            console.log('data', data);
            setAuthentication(data);
            setIsFormRegister(false);
        },
        [setAuthentication, setIsFormRegister]
    );

    return (
        <View style={styles.container}>
            <SubTitleDivider text='Autenticação' />
            <FieldsAuthentication control={control} errors={errors} />

            <ModuleFormRegister {...{ form, setForm, control, errors, setValue }} />

            <FAB
                small
                color='#FFFFFF'
                icon='arrow-right'
                style={styles.fab}
                onPress={handleSubmit(onSubmit)}
                loading={personLoading || companyLoading}
                disabled={personLoading || companyLoading}
            />
        </View>
    );
};

export default FormRegister;
