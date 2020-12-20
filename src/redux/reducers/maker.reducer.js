const makerReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_MAKER':
            return action.payload;
        case 'SET_FILTER':
            return action.payload.flat();
        default:
            return state;
    }
}

export default makerReducer;