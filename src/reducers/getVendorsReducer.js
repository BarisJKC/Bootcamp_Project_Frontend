// to get vendors list from database

export default (state=[],action) => {
    switch (action.type) {
        case 'GET_VENDORS':
                return action.payload;
        default:
            return state;
    };
};