import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCustomerProfile} from '../actions';

class CustomerProfile extends Component {
    
    componentDidMount(){
        this.props.getCustomerProfile();
    }    
    
    render() {
        return (
            <div>
                {this.props.customerLoginStatus}
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return ({
        customerLoginStatus:state.customerLoginStatus,
        customerProfile:state.customerProfile
    });
};

export default connect (mapStateToProps,{getCustomerProfile})(CustomerProfile);
