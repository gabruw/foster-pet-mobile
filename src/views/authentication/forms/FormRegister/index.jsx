//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import ButtonContained from 'components/ButtonContained';
import StateButtonGroup from 'components/ButtonGroup/StateButtonGroup';
import SubTitleDivider from 'components/SubTitleDivider';
import FieldsAddress from 'fields/FieldsAddress';
import FieldsAuthentication from 'fields/FieldsAuthentication';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import usePersonContext from 'storages/person/context';
import { DEFAULT_VALUE, FORM_REGISTER_VALUES } from 'utils/constants/module/form-register';
import authenticationSchema from 'utils/validation/schemas/authentication';
import ModuleFormRegister from './ModuleFormRegister';
import useStyles from './styles';

//#endregion

const FormRegister = () => {
    const styles = useStyles();

    const { isLoading } = usePersonContext();
    const [form, setForm] = useState(DEFAULT_VALUE);

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
        console.log('data', data);
    }, []);

    return (
        <ScrollView>
            <SubTitleDivider text='Autenticação' />
            <FieldsAuthentication control={control} errors={errors} />

            <View style={styles.container}>
                <StateButtonGroup get={form} set={setForm} values={FORM_REGISTER_VALUES} />
                <ModuleFormRegister form={form} control={control} errors={errors} setValue={setValue} />
            </View>

            <SubTitleDivider text='Endereço' />
            <FieldsAddress control={control} errors={errors} getValues={getValues} />

            <ButtonContained loading={isLoading} disabled={isLoading} onPress={handleSubmit(onSubmit)}>
                Confirmar
            </ButtonContained>
        </ScrollView>
    );
};

export default FormRegister;
