//#region Imports

import COLOR from 'assets/styles/color';
import FieldsAuthentication from 'components-field/FieldsAuthentication';
import Box from 'components/Box';
import FAB from 'components/FAB';
import SubTitleDivider from 'components/SubTitleDivider';
import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import useAuthenticationContext from 'storages/authentication/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useUserContext from 'storages/user/context';
import ModuleFormRegister from './ModuleFormRegister';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const FormContent = () => {
    const styles = useStyles();
    const { handleSubmit } = useFormContext();

    const { isLoading } = useUserContext();
    const { setIsFormRegister, setAuthentication } = useAuthenticationContext();

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
                <FieldsAuthentication />
            </Box>

            <Box style={styles.box}>
                <ModuleFormRegister />
            </Box>

            <FAB
                icon='arrow-right'
                style={styles.fab}
                isLoading={isLoading}
                isDisabled={isLoading}
                onPress={handleSubmit(onSubmit)}
            >
                Avançar
            </FAB>
        </View>
    );
};

const FormRegister = () => {
    const { schema } = useUserContext();

    return (
        <FormContextProvider schema={schema}>
            <FormContent />
        </FormContextProvider>
    );
};

export default FormRegister;
