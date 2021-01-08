let availability_array = [];

const filterReducer = (state={}, action) => {
    switch (action.type) {
        case 'SET_FILTERS':
            return [...state, action.payload];

        case 'ADD_AVAILABILITY':
            product_category_array.push(action.payload);
            return {...state, availability: availability_array};
        case 'REMOVE_AVAILABILITY':
            product_category_array = product_category_array.filter(item => item !== action.payload);
            return {...state, availability: availability_array};

        default:
            return state;
    }
}

export default filterReducer;