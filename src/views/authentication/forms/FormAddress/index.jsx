//#region Imports

import COLOR from 'assets/styles/color';
import FieldsAddress from 'components-field/FieldsAddress';
import Box from 'components/Box';
import Button from 'components/Button';
import SubTitleDivider from 'components/SubTitleDivider';
import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import useAddressContext from 'storages/address/context';
import useAuthenticationContext from 'storages/authentication/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useUserContext from 'storages/user/context';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import addressSchema from 'utils/validations/yup/schemas/address';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const FormContent = () => {
    const styles = useStyles();
    const { setValue, handleSubmit } = useFormContext();

    const { authentication } = useAuthenticationContext();
    const { register, isLoading: userIsLoading } = useUserContext();
    const { address, isLoading: addressIsLoading } = useAddressContext();

    useEffect(() => {
        if (address) {
            setValue(ADDRESS_FIELDS.ROAD, address[ADDRESS_FIELDS.ROAD]);
            setValue(ADDRESS_FIELDS.NUMBER, address[ADDRESS_FIELDS.NUMBER]);
            setValue(ADDRESS_FIELDS.COMPLEMENT, address[ADDRESS_FIELDS.COMPLEMENT]);
            setValue(ADDRESS_FIELDS.NEIGHBORHOOD, address[ADDRESS_FIELDS.NEIGHBORHOOD]);
        }
    }, [address]);

    const onSubmit = useCallback(
        (data) => {
            data = { ...data, authentication };
            register(data);
        },
        [authentication, register]
    );

    return (
        <View style={styles.content}>
            <Box paddingBottom={18}>
                <SubTitleDivider text='Endereço' color={DARKEST} />
                <FieldsAddress />
            </Box>

            <Button
                marginTop={20}
                onPress={handleSubmit(onSubmit)}
                isLoading={userIsLoading || addressIsLoading}
                isDisabled={userIsLoading || addressIsLoading}
            >
                Concluir
            </Button>
        </View>
    );
};

const FormAddress = () => (
    <FormContextProvider schema={addressSchema}>
        <FormContent />
    </FormContextProvider>
);

export default FormAddress;
