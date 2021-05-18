const clsx = (values = {}) => Object.entries(values).map((value) => value[1] && Number(value[0]));

export default clsx;
