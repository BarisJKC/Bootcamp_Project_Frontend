// to combine reducers in the store for data collection

import {combineReducers} from 'redux';
import getAdminsReducer from './getAdminsReducer';
import getCommentsReducer from './getCommentsReducer';
import getCustomersReducer from './getCustomersReducer';
import getOrdersReducer from './getOrdersReducer';
import getProductsReducer from './getProductsReducer';
import getVendorsReducer from './getVendorsReducer';
import getCustomerTokenReducer from './getCustomerTokenReducer';
import customerLoginStatusReducer from './customerLoginStatusReducer';
import getCustomerProfileReducer from './getCustomerProfileReducer';
import getCustomerRegisterReducer from './getCustomerRegisterReducer';
import getIntoCustomerBasketReducer from './getIntoCustomerBasketReducer';
import customerBasketValueReducer from './customerBasketValueReducer';
import getCustomerOrderStatusReducer from './getCustomerOrderStatusReducer';


export default combineReducers ({
    admins:getAdminsReducer,
    comments:getCommentsReducer,
    customers: getCustomersReducer,
    orders:getOrdersReducer,
    products:getProductsReducer,
    vendors: getVendorsReducer,
    customerToken:getCustomerTokenReducer,
    customerLoginStatus:customerLoginStatusReducer,
    customerProfile:getCustomerProfileReducer,
    customerRegister:getCustomerRegisterReducer,
    customerBasket:getIntoCustomerBasketReducer,
    customerBasketValue:customerBasketValueReducer,
    customerOrderStatus:getCustomerOrderStatusReducer
});