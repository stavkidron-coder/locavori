const makerReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_MAKER':
            return action.payload;
        default:
            return state;
    }
}

export default makerReducer;