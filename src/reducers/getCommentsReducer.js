// to get comments list from database

export default (state=[],action) => {
    switch (action.type) {
        case 'GET_COMMENTS':
            return action.payload;
        default: 
            return state;
    };
};