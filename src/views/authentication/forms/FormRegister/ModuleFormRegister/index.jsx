//#region Imports

import StateButtonGroup from 'components/ButtonGroup/StateButtonGroup';
import React from 'react';
import { View } from 'react-native';
import { FORM_REGISTER_OPTIONS } from 'utils/constants/module/form-register';
import ModuleFormRegisterFields from './ModuleFormRegisterFields';
import useStyles from './styles';

//#endregion

const ModuleFormRegister = ({ form, setForm, control, errors, setValue }) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <StateButtonGroup get={form} set={setForm} values={FORM_REGISTER_OPTIONS} />
            <ModuleFormRegisterFields form={form} control={control} errors={errors} setValue={setValue} />
        </View>
    );
};

export default ModuleFormRegister;
