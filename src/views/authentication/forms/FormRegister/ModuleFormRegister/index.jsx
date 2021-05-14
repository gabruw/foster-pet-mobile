//#region Imports

import COLOR from 'assets/styles/color';
import StateButtonGroup from 'components/ButtonGroup/StateButtonGroup';
import SubTitleDivider from 'components/SubTitleDivider';
import React, { Fragment, useMemo } from 'react';
import { FORM_REGISTER_MODULE, FORM_REGISTER_OPTIONS } from 'utils/constants/module/form-register';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const ModuleFormRegister = ({ form, control, errors, setValue, setForm }) => {
    const { component: Component, text } = useMemo(() => FORM_REGISTER_MODULE[form], [form]);

    return (
        <Fragment>
            <SubTitleDivider text={text} color={DARKEST} />
            <StateButtonGroup get={form} set={setForm} values={FORM_REGISTER_OPTIONS} />
            <Component control={control} errors={errors} setValue={setValue} inside />
        </Fragment>
    );
};

export default ModuleFormRegister;
