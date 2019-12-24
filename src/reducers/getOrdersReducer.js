// to get orders list from database

export default (state=[],action) => {
    switch (action.type) {
        case 'GET_ORDERS':
            return action.payload;
        default: 
            return state;
    };
};