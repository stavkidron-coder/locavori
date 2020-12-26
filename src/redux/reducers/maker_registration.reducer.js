var product_category_array = [];

const registrationReducer = (state={}, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_CATEGORY':
            product_category_array.push(action.payload);
            return {...state, product_category: product_category_array};
        case 'REMOVE_PRODUCT_CATEGORY':
            product_category_array = product_category_array.filter(item => item !== action.payload);
            return {...state, product_category: product_category_array};
        default:
            return state;
    }
}

export default registrationReducer;