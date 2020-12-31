const makerReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_MAKER':
            return action.payload;
        case 'SET_FILTERED_MAKER':
            return action.payload.flat();
        default:
            return state;
    }
}


export default makerReducer;