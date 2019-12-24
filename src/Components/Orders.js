import React, { Component } from 'react';
import {connect} from 'react-redux';
// import Spinner from './Spinner';
import OrderCard from './OrderCard';
import {getOrders} from '../actions';


class Orders extends Component {

    componentDidMount() {
        this.props.getOrders();
    };

    renderOrders() {
        if(this.props.orders.length>0) {
            const renderThis = this.props.orders.map(({_id,orderCreated,orderValue,orderStatus,orderList}) => {
                return (
                    <OrderCard key={_id} date={orderCreated.slice(0,10)} time={orderCreated.slice(11,19)} value={orderValue} list={orderList} status={orderStatus} />
                );
            });
            return renderThis;
        } else {
            return <div>{this.props.customerLoginStatus}</div>;
        };
    };

    render() {
        return (
            <div>
                {this.renderOrders()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return ({
        orders:state.orders,
        customerLoginStatus:state.customerLoginStatus,
    });
};

export default connect (mapStateToProps,{getOrders})(Orders);



