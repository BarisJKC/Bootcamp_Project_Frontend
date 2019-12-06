import history from '../history';
import api from "../api/api"; // to use axios api

export const getAdmins = () => async dispatch => { // to get all Admin info from backend/database
    const res = await api.get('/admins');
    dispatch({type:'GET_ADMINS',payload:res.data});
};

export const getComments = () => async dispatch => { // to get all Comment info from backend/database
    const res = await api.get('/comments');
    dispatch({type:'GET_COMMENTS',payload:res.data});
};

export const getCustomers = () => async dispatch => { // to get all Customer info from backend/database
    const res = await api.get('/customers');
    dispatch({type:'GET_CUSTOMERS',payload:res.data});
};

export const getOrders = () => async dispatch => { // to get all Order info from backend/database
    const res = await api.get('/orders');
    dispatch({type:'GET_ORDERS',payload:res.data});
};

export const getProducts = () => async dispatch => { // to get all Product info from backend/database
    const res = await api.get('/products');
    dispatch({type:'GET_PRODUCTS',payload:res.data});
};

export const getVendors = () => async dispatch => { // to get all Vendor info from backend/database
    const res = await api.get('/vendors');
    dispatch({type:'GET_VENDORS',payload:res.data});
};


export const getCustomerProfile = () => async (dispatch,getState) => { // to get the customer profile info with the token of the customer from backend/database
    try {
        const token = getState().customerToken.authorization; // token is stored in the store
        const res = await api.get('/customers/profile',{headers: {'Authorization': token}});
        dispatch({type:'GET_CUSTOMER_PROFILE',payload:res.data});
    } catch (res) {
        dispatch({type:'CUSTOMER_LOGIN_STATUS',payload:"You need to login!"});
    };
};

export const getCustomerToken = (loginData) => async dispatch => { // to get single customer info from backend/database and get a token for the customer from backend
    try {
        const res = await api.post('/customers/login',loginData);
        dispatch({type:'GET_CUSTOMER_TOKEN',payload:res.headers});
        if(!loginData.isFromRegister) { // check if the request is coming from new register or not
            dispatch({type:'CUSTOMER_LOGIN_STATUS',payload:"Welcome to your account. You will be re-directed to Products page in 5 secs"});
        };            
        const timer = setTimeout(() => {
            // history.push('/customers/profile');
            history.push('/products');
            clearTimeout(timer);
            dispatch({type:'CUSTOMER_LOGIN_STATUS',payload:res.data});
        }, 5000);
    } catch(error) { // incase of an error, error response to be recorded into store
        console.log(error.response.data);
        dispatch({type:'CUSTOMER_LOGIN_STATUS',payload:error.response.data});
    };
};

export const getCustomerRegister = (registerData) => async dispatch => { // to get a new customer register into database
    try {
        const res = await api.post('/customers/register',registerData);
        dispatch({type:'GET_CUSTOMER_REGISTER',payload:res.data});
        // console.log(res.headers);
        // history.push('/customers/profile');
        const loginData = {
            customerEmail:registerData.customerEmail,
            customerPassword:registerData.customerPassword,
            isFromRegister:true
        };
        dispatch(getCustomerToken(loginData));
        dispatch({type:'CUSTOMER_LOGIN_STATUS',payload:"Your account has been successfully created. You will be re-directed to Products page in 5 secs"});            
        // const timer = setTimeout(() => {
        //     history.push('/products');
        //     clearTimeout(timer);
        // }, 5000);
    } catch(error) { // incase of an error, error response to be recorded into store
        console.log(error.response.data);
        dispatch({type:'CUSTOMER_LOGIN_STATUS',payload:error.response.data});
    };
};

export const cleanLoginStatusText = () => async dispatch => { // to clean up the text in customer login status
    dispatch({type:'CUSTOMER_LOGIN_STATUS',payload:""});
};

export const addProductToCustomerBasket = (item) => async (dispatch,getState) => { // to add products into customer basket
    const token = getState().customerToken.authorization; // token is stored in the store
    const basket = getState().customerBasket;
    basket.push(item);
    if (!token) dispatch({type:'CUSTOMER_LOGIN_STATUS',payload:'Please login!'});
    dispatch({type:'GET_INTO_CUSTOMER_BASKET',payload:basket});
    dispatch(getCustomerBasketValue());
};

export const updateCustomerBasket = (index) => async (dispatch,getState) => {//to delete oen item from the customer basket
    const basket = getState().customerBasket;
    basket.splice(index, 1);
    dispatch({type:'GET_INTO_CUSTOMER_BASKET',payload:basket});
    dispatch(getCustomerBasketValue());
};

export const getCustomerBasketValue = () => async (dispatch,getState) => {
    const basket = getState().customerBasket;
    if(basket.length>0){
        let temp=0;
        const deger = basket.forEach(({itemDeger}) => {
            temp=temp+itemDeger;
            return temp;
        });
        console.log(deger);
        dispatch({type:'GET_CUSTOMER_BASKET_VALUE',payload:deger});
    } else {
        dispatch({type:'GET_CUSTOMER_BASKET_VALUE',payload:0});
    }
}
