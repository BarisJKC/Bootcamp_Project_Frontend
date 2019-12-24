// to get a new customer order registry status from database

export default (state='',action) => {
    switch (action.type) {
        case 'GET_CUSTOMER_ORDER_STATUS':
            return action.payload;
        default: 
            return state;
    };
};