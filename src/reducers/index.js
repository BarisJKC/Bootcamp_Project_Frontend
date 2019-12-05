// to combine reducers in the store for data collection

import {combineReducers} from 'redux';
import getAdminsReducer from './getAdminsReducer';
import getCommentsReducer from './getCommentsReducer';
import getCustomersReducer from './getCustomersReducer';
import getOrdersReducer from './getOrdersReducer';
import getProductsReducer from './getProductsReducer';
import getVendorsReducer from './getVendorsReducer';
import getCustomerReducer from './getCustomerReducer';
import noCustomerReducer from './noCustomerReducer';


export default combineReducers ({
    admins:getAdminsReducer,
    comments:getCommentsReducer,
    customers: getCustomersReducer,
    orders:getOrdersReducer,
    products:getProductsReducer,
    vendors: getVendorsReducer,
    customer:getCustomerReducer,
    noCustomer:noCustomerReducer
});