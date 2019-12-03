// to get customers list from database

export default (state=[],action) => {
    switch (action.type) {
        case 'GET_CUSTOMERS':
                return action.payload;
        default: 
            return state;
    };
};