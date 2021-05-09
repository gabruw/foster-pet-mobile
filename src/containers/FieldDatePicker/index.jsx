//#region Imports

import DateTimePicker from '@react-native-community/datetimepicker';
import FieldInput from 'components/FieldInput';
import moment from 'moment';
import React, { Fragment, useState } from 'react';

//#endregion

const FieldDatePicker = ({ control, errors, setValue, name, label, format = 'DD-MM-YYYY', display = 'default' }) => {
    const [date, setDate] = useState(new Date());
    const [visible, setVisible] = useState(false);

    return (
        <Fragment>
            <FieldInput
                name={name}
                label={label}
                errors={errors}
                control={control}
                icon='calendar-month'
                onTouchStart={() => setVisible(true)}
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
