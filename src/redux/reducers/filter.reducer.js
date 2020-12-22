const filterReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_FILTERS':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default filterReducer;