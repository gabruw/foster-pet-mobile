//#region Imports

import COLOR from 'assets/styles/color';
import StateButtonGroup from 'components/ButtonGroup/StateButtonGroup';
import SubTitleDivider from 'components/SubTitleDivider';
import React, { Fragment, useEffect, useMemo } from 'react';
import useFormContext from 'storages/form/context';
import useUserContext from 'storages/user/context';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const ModuleFormRegister = () => {
    const { options, fields, form, setForm } = useUserContext();
    const { component: Component, text } = useMemo(() => fields[form], [form]);

    const {
        clearErrors,
        formState: { errors }
    } = useFormContext();

    useEffect(() => {
        errors && clearErrors();
    }, [form]);

    return (
        <Fragment>
            <SubTitleDivider text={text} color={DARKEST} />
            <StateButtonGroup get={form} set={setForm} values={options} />

            <Component inside />
        </Fragment>
    );
};

export default ModuleFormRegister;
