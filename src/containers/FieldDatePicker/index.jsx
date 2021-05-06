//#region Imports

import DateTimePicker from '@react-native-community/datetimepicker';
import COLOR from 'assets/styles/color';
import FieldInput from 'components/FieldInput';
import moment from 'moment';
import React, { Fragment, useState } from 'react';
import { TextInput } from 'react-native-paper';

//#endregion

const { PURPLE } = COLOR.BACKGROUND;

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
                onTouchStart={() => setVisible(true)}
                left={<TextInput.Icon name='calendar-month' color={PURPLE} />}
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
