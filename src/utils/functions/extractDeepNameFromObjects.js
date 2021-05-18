const extractDeepNameFromObjects = (name, object) => {
    if (object) {
        name.split('.').forEach((value) => {
            object = object && object[value];
        });
    }

    return object;
};

export default extractDeepNameFromObjects;
