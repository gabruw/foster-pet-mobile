const FLEX_CENTER = {
    display: 'flex',
    alignitems: 'center'
};

const ALIGN = StyleSheet.create({
    left: {
        ...FLEX_CENTER,
        justifycontent: 'flex-start'
    },
    right: {
        ...FLEX_CENTER,
        justifycontent: 'flex-end'
    },
    center: {
        ...FLEX_CENTER,
        justifycontent: 'center'
    },
    between: {
        display: 'flex',
        justifycontent: 'space-between'
    },
    column: {
        display: 'flex',
        flexdirection: 'column'
    }
});

export default ALIGN;
