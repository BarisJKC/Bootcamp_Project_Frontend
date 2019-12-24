// to calculate the value of the basket each time an item is added into the basket

export default (state=0,action) => {
    switch (action.type) {
        case 'GET_CUSTOMER_BASKET_VALUE':
            return action.payload;
        default:
            return state;
    };
};