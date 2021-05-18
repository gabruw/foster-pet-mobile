//#region Imports

import COLOR from 'assets/styles/color';
import StateButtonGroup from 'components/ButtonGroup/StateButtonGroup';
import SubTitleDivider from 'components/SubTitleDivider';
import React, { Fragment, useMemo } from 'react';
import useUserType from 'utils/hooks/useUserType';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const ModuleFormRegister = ({ form, control, errors, setValue, setForm }) => {
    const { options, fields } = useUserType();
    const { component: Component, text } = useMemo(() => fields[form], [form]);

    return (
        <Fragment>
            <SubTitleDivider text={text} color={DARKEST} />
            <StateButtonGroup get={form} set={setForm} values={options} />
            <Component control={control} errors={errors} setValue={setValue} inside />
        </Fragment>
    );
};

export default ModuleFormRegister;
