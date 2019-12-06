// to get products into customer basket

export default (state=[],action) => {
    switch (action.type) {
        case 'GET_INTO_CUSTOMER_BASKET':
                return action.payload;
        default:
            return state;
    };
};