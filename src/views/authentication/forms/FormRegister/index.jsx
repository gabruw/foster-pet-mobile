//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import ButtonContained from 'components/ButtonContained';
import SubTitleDivider from 'components/SubTitleDivider';
import FieldsAddress from 'fields/FieldsAddress';
import FieldsAuthentication from 'fields/FieldsAuthentication';
import FieldsCompany from 'fields/FieldsCompany';
import FieldsPerson from 'fields/FieldsPerson';
import React, { Fragment, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import usePersonContext from 'storages/person/context';
import authenticationSchema from 'utils/validation/schemas/authentication';

//#endregion

const FormRegister = () => {
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
        console.log('data', data);
    }, []);

    return (
        <Fragment>
            <SubTitleDivider text='Autenticação' />
            <FieldsAuthentication control={control} errors={errors} />

            <SubTitleDivider text='Empresa' />
            <FieldsCompany control={control} errors={errors} />

            <SubTitleDivider text='Pessoa' />
            <FieldsPerson control={control} errors={errors} setValue={setValue} />

            <SubTitleDivider text='Endereço' />
            <FieldsAddress control={control} errors={errors} getValues={getValues} />

            <ButtonContained loading={isLoading} disabled={isLoading} onPress={handleSubmit(onSubmit)}>
                Confirmar
            </ButtonContained>
        </Fragment>
    );
};

export default FormRegister;
