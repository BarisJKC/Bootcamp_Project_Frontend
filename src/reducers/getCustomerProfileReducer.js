// to get a customer profile from database

export default (state="",action) => {
    switch (action.type) {
        case 'GET_CUSTOMER_PROFILE':
            return action.payload;
        default: 
            return state;
    };
};