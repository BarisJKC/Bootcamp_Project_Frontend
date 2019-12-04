// to get the customer data to login into the database

export default (state={},action) => {
    switch (action.type) {
        case 'GET_CUSTOMER':
                return action.payload;
        default:
            return state;
    };
};