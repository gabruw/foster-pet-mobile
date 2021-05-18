//#region Imports

import COLOR from 'assets/styles/color';
import Box from 'components/Box';
import Button from 'components/Button';
import SubTitleDivider from 'components/SubTitleDivider';
import FieldsAddress from 'components-field/FieldsAddress';
import React, { useCallback, useEffect, useMemo } from 'react';
import { View } from 'react-native';
import useAddressContext from 'storages/address/context';
import useAuthenticationContext from 'storages/authentication/context';
import usePersonContext from 'storages/person/context';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import useUserType from 'utils/hooks/useUserType';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const FormAddress = () => {
    const styles = useStyles();

    const { isLoading: userLoading } = useUserType();
    const { authentication } = useAuthenticationContext();
    const { register: personRegister } = usePersonContext();
    const { address, form, isLoading: addressLoading } = useAddressContext();

    const { setValue, handleSubmit } = form;

    useEffect(() => {
        if (address) {
            setValue(ADDRESS_FIELDS.ROAD, address[ADDRESS_FIELDS.ROAD]);
            setValue(ADDRESS_FIELDS.NUMBER, address[ADDRESS_FIELDS.NUMBER]);
            setValue(ADDRESS_FIELDS.COMPLEMENT, address[ADDRESS_FIELDS.COMPLEMENT]);
            setValue(ADDRESS_FIELDS.NEIGHBORHOOD, address[ADDRESS_FIELDS.NEIGHBORHOOD]);
        }
    }, [address]);

    const handleDisableLoading = useMemo(() => addressLoading || userLoading, [addressLoading, userLoading]);

    const onSubmit = useCallback(
        (data) => {
            data = { ...data, authentication };
            personRegister(data);
        },
        [authentication, personRegister]
    );

    return (
        <View style={styles.content}>
            <Box paddingBottom={20}>
                <SubTitleDivider text='Endereço' color={DARKEST} />
                <FieldsAddress />

                <View style={styles.button}>
                    <Button
                        marginTop={5}
                        loading={handleDisableLoading}
                        disabled={handleDisableLoading}
                        onPress={handleSubmit(onSubmit)}
                    >
                        Concluir
                    </Button>
                </View>
            </Box>
        </View>
    );
};

export default FormAddress;
