// to get products list from database

export default (state=[],action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return action.payload;
        default: 
            return state;
    };
};