// to get the customer token to login into the database

export default (state={},action) => {
    switch (action.type) {
        case 'GET_CUSTOMER_TOKEN':
            return action.payload;
        default:
            return state;
    };
};