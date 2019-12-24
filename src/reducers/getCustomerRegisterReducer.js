// to get a new customer register into database

export default (state={},action) => {
    switch (action.type) {
        case 'GET_CUSTOMER_REGISTER':
            return action.payload;
        default: 
            return state;
    };
};