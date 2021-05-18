const formatNamesAsObject = (values = {}) => {
    const entries = Object.entries(values).map((value) => [value[0], `${values.THIS}.${value[1]}`]);
    return Object.fromEntries(entries);
};

export default formatNamesAsObject;
