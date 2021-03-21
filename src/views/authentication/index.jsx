//#region Imports

import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

//#endregion

const Authentication = () => {
    const [text, setText] = useState('');

    return <TextInput label='Email' value={text} onChangeText={(x) => setText(x)} />;
};

export default Authentication;
