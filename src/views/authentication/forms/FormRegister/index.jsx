//#region Imports

import COLOR from 'assets/styles/color';
import FieldsAuthentication from 'components-field/FieldsAuthentication';
import Box from 'components/Box';
import Button from 'components/Button';
import SubTitleDivider from 'components/SubTitleDivider';
import React, { useCallback } from 'react';
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

            <Button iconRight icon='arrow-right' isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
                Avançar
            </Button>
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
