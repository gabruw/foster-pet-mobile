const FLEX_CENTER = {
    display: 'flex',
    alignItems: 'center'
};

const ALIGN = {
    LEFT: {
        ...FLEX_CENTER,
        justifyContent: 'flex-start'
    },
    RIGHT: {
        ...FLEX_CENTER,
        justifyContent: 'flex-end'
    },
    CENTER: {
        ...FLEX_CENTER,
        justifyContent: 'center'
    },
    BETWEEN: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    COLUMN: {
        display: 'flex',
        flexDirection: 'column'
    }
};

export default ALIGN;
