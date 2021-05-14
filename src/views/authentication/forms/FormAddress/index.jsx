//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import Box from 'components/Box';
import Button from 'components/Button';
import SubTitleDivider from 'components/SubTitleDivider';
import FieldsAddress from 'fields/FieldsAddress';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import useAddressContext from 'storages/address/context';
import useAuthenticationContext from 'storages/authentication/context';
import useCompanyContext from 'storages/company/context';
import usePersonContext from 'storages/person/context';
import ADDRESS_FIELD from 'utils/constants/field/address';
import addressSchema from 'utils/validation/schemas/address';
import useStyles from './styles';
import COLOR from 'assets/styles/color';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const FormAddress = () => {
    const styles = useStyles();

    const { address } = useAddressContext();
    const { authentication } = useAuthenticationContext();
    const { isLoading: personLoading, register: personRegister } = usePersonContext();
    const { isLoading: companyLoading, register: companyRegister } = useCompanyContext();

    const {
        control,
        setValue,
        getValues,
        handleSubmit,
        formState: { errors }
    } = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(addressSchema)
    });

    useEffect(() => {
        if (address) {
            setValue(ADDRESS_FIELD.ROAD, address[ADDRESS_FIELD.ROAD]);
            setValue(ADDRESS_FIELD.NUMBER, address[ADDRESS_FIELD.NUMBER]);
            setValue(ADDRESS_FIELD.COMPLEMENT, address[ADDRESS_FIELD.COMPLEMENT]);
            setValue(ADDRESS_FIELD.NEIGHBORHOOD, address[ADDRESS_FIELD.NEIGHBORHOOD]);
        }
    }, [address]);

    const onSubmit = useCallback(
        (data) => {
            data = { ...data, authentication };

            switch (key) {
                case 'PERSON':
                    personRegister(data);
                    break;
                case 'COMPANY':
                    companyRegister(data);
                    break;
                default:
                    break;
            }
        },
        [authentication, personRegister, companyRegister]
    );

    return (
        <View style={styles.content}>
            <Box paddingBottom={20}>
                <SubTitleDivider text='Endereço' color={DARKEST} />
                <FieldsAddress control={control} errors={errors} getValues={getValues} />

                <View style={styles.button}>
                    <Button
                        marginTop={5}
                        onPress={handleSubmit(onSubmit)}
                        loading={personLoading || companyLoading}
                        disabled={personLoading || companyLoading}
                    >
                        Concluir
                    </Button>
                </View>
            </Box>
        </View>
    );
};

export default FormAddress;
