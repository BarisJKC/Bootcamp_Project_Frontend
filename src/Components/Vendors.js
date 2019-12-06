import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getVendors} from '../actions';
import Spinner from './Spinner';
import VendorCard from './VendorCard';

// to get all Vendors and create a render status for Vendors
class Vendors extends Component {
    
    renderList() {
        if (this.props.vendors.length>0) {
            const renderThis = this.props.vendors.map(({_id,vendorName,vendorCity,vendorPortfolio}) => {
                return (
                    <VendorCard key={_id} name={vendorName} city={vendorCity} products={vendorPortfolio} />
                );
            });
            return renderThis;
        } else {
            return <div><Spinner /></div>;
        };
    };

    componentDidMount() {
        this.props.getVendors();
    };
    
    render() {
        return (
            <div className="ui text container horizontal segments">
                {this.renderList()}
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return ({vendors:state.vendors});
};

export default connect (mapStateToProps,{getVendors})(Vendors);