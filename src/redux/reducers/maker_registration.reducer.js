const registrationReducer = (state={}, action) => {
    switch (action.type) {
        case 'SET_PRODUCT_CATEGORY':
            return {...state, product_category: action.payload};
        default:
            return state;
    }
}