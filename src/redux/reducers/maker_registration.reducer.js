let product_category_array = [];
let business_type_array = [];
let business_license_array = []

const registrationReducer = (state={}, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_CATEGORY':
            product_category_array.push(action.payload);
            return {...state, product_category: product_category_array};
        case 'REMOVE_PRODUCT_CATEGORY':
            product_category_array = product_category_array.filter(item => item !== action.payload);
            return {...state, product_category: product_category_array};

        case 'ADD_CONTACT':
            return {...state, contact: {...state.contact, [action.payload.key]: action.payload.value}};

        case 'ADD_BUSINESS_TYPE':
            business_type_array.push(action.payload);
            return {...state, business_type: business_type_array};
        case 'REMOVE_BUSINESS_TYPE':
            business_type_array = business_type_array.filter(item => item !== action.payload);
            return {...state, business_type: business_type_array};

        case 'ADD_BUSINESS_LICENSE':
            business_license_array.push(action.payload);
            return {...state, business_license: business_license_array};
        case 'REMOVE_BUSINESS_LICENSE':
            business_license_array = business_license_array.filter(item => item !== action.payload);
            return {...state, business_license: business_license_array};

        case 'ADD_BUSINESS_SPECS':
            return {...state, business_specs: {...state.business_specs, [action.payload.key]: action.payload.value}};

        default:
            return state;
    }
}

export default registrationReducer;