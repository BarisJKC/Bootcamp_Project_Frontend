// to get vendors list from database

export default (state="",action) => {
    switch (action.type) {
        case 'NO_CUSTOMER':
                return action.payload;
        default:
            return state;
    };
};