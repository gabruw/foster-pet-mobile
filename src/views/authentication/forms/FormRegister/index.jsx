//#region Imports

import COLOR from 'assets/styles/color';
import FieldsAuthentication from 'components-field/FieldsAuthentication';
import Box from 'components/Box';
import FAB from 'components/FAB';
import SubTitleDivider from 'components/SubTitleDivider';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import useAuthenticationContext from 'storages/authentication/context';
import useCompanyContext from 'storages/company/context';
import usePersonContext from 'storages/person/context';
import validateDefaultValues from 'utils/functions/validateDefaultValues';
import useUserType from 'utils/hooks/useUserType';
import ModuleFormRegister from './ModuleFormRegister';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const FormRegister = ({ setIsFormRegister }) => {
    const styles = useStyles();
    const { schema, values } = useUserType();

    const { isLoading: personLoading } = usePersonContext();
    const { isLoading: companyLoading } = useCompanyContext();
    const { authentication, setAuthentication } = useAuthenticationContext();

    const [form, setForm] = useState(values.PERSON.value);
    const actualSchema = useMemo(() => schema[form], [form]);

    const {
        control,
        setValue,
        clearErrors,
        handleSubmit,
        formState: { errors }
    } = useForm({
        reValidateMode: 'onBlur',
        // resolver: yupResolver(actualSchema),
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
            <Box>
                <SubTitleDivider text='Autenticação' color={DARKEST} />
                <FieldsAuthentication control={control} errors={errors} />
            </Box>

            <Box style={styles.box}>
                <ModuleFormRegister {...{ form, setForm, control, errors, setValue }} />
            </Box>

            <FAB
                style={styles.fab}
                icon='arrow-right'
                onPress={handleSubmit(onSubmit)}
                isLoading={personLoading || companyLoading}
                isDisabled={personLoading || companyLoading}
            >
                Avançar
            </FAB>
        </View>
    );
};

export default FormRegister;
