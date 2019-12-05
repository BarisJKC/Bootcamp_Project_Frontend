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

export const getCustomer = (loginData) => async dispatch => { // to get single customer info from backend/database
    try {
        const res = await api.post('/customers/login',loginData)
        dispatch({type:'GET_CUSTOMER',payload:res.data});
        history.push('/products');
    } catch(error) {
        console.log(error.response.data);
        dispatch({type:'NO_CUSTOMER',payload:error.response.data});

    };
    
};

export const cleanText = () => async dispatch => {
    dispatch({type:'NO_CUSTOMER',payload:""});
};

