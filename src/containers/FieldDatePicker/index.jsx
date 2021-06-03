//#region Imports

import DateTimePicker from '@react-native-community/datetimepicker';
import FieldInput from 'containers/FieldInput';
import moment from 'moment';
import React, { Fragment, useState } from 'react';
import useFormContext from 'storages/form/context';

//#endregion

const FieldDatePicker = ({ name, label, format = 'DD-MM-YYYY', display = 'default', ...rest }) => {
    const [date, setDate] = useState(new Date());
    const [visible, setVisible] = useState(false);

    const {
        control,
        setValue,
        formState: { errors }
    } = useFormContext();

    return (
        <Fragment>
            <FieldInput
                name={name}
                label={label}
                errors={errors}
                control={control}
                icon='calendar-alt'
                onTouchStart={() => setVisible(true)}
                {...rest}
            />

            {visible && (
                <DateTimePicker
                    mode='date'
                    value={date}
                    format={format}
                    display={display}
                    onChange={(value) => {
                        if (value && value.nativeEvent && value.nativeEvent.timestamp) {
                            const formated = new Date(value.nativeEvent.timestamp);
                            setDate(formated);

                            setValue(name, moment(formated).format('DD/MM/YYYY'));
                        }

                        setVisible(false);
                    }}
                />
            )}
        </Fragment>
    );
};

export default FieldDatePicker;
