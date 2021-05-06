//#region Imports

import SubTitleDivider from 'components/SubTitleDivider';
import React, { Fragment, useMemo } from 'react';
import FORM_REGISTER_MODULE from 'utils/constants/module/form-register';

//#endregion

const ModuleFormRegister = ({ form, control, errors, setValue }) => {
    const { component, text } = useMemo(() => FORM_REGISTER_MODULE(control, errors, setValue)[form], [form]);

    return (
        <Fragment>
            <SubTitleDivider text={text} />
            {component}
        </Fragment>
    );
};

export default ModuleFormRegister;
