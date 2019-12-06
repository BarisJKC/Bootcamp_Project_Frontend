// to get customer login status text

export default (state="",action) => {
    switch (action.type) {
        case 'CUSTOMER_LOGIN_STATUS':
                return action.payload;
        default:
            return state;
    };
};