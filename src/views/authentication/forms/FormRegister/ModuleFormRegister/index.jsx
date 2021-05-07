//#region Imports

import SubTitleDivider from 'components/SubTitleDivider';
import React, { Fragment, useMemo } from 'react';
import FORM_REGISTER_MODULE from 'utils/constants/module/form-register';

//#endregion

const ModuleFormRegister = ({ form, control, errors, setValue }) => {
    const { component: Component, text } = useMemo(() => FORM_REGISTER_MODULE[form], [form]);

    return (
        <Fragment>
            <SubTitleDivider text={text} />
            <Component control={control} errors={errors} setValue={setValue} />
        </Fragment>
    );
};

export default ModuleFormRegister;
