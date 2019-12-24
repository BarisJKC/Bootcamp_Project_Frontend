import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {addProductToCustomerBasket} from '../actions';
import {cleanLoginStatusText} from '../actions';


// to get all products of the vendors to be rendered
class ProductCard extends Component {
    
    state= {
        qty:1
    }    

    clickHandler() {
        const item={
            itemCity:this.props.city,
            itemName:this.props.name,
            itemVendorId:this.props.vendorId,
            itemProductId:this.props.productId,
            itemQty:this.state.qty,
            itemUnit:this.props.unit,
            itemPrice:this.props.price,
            itemValue:parseInt(this.props.price)*parseInt(this.state.qty)
        };
        this.props.addProductToCustomerBasket(item); // add above item into customer basket
        this.setState({qty:1}); // revert the qty of the item to 1 for new selection
    };

    render() {
        return (
            <div className="ui card">
                <div className="content">
                <div className="ui fluid image">
                    <img src={this.props.URL} alt={this.props.name}/>
                </div>
                    <Link to="/vendor/login" className="header">{this.props.name}</Link>
                    <Link to="/vendor/login" className="header">{this.props.city}</Link>
                    
                    <div className="meta">
                    <span className="date">Stok {this.props.qty} KG</span>
                    </div>
                    <div><span>Paket tipi - {this.props.unit}</span></div>
                </div>
                <div className="extra content">
                    <button onClick={()=>{this.clickHandler()}} ><i className="shopping basket icon right"></i></button>
                    <Link to="/vendor/login" >
                    <i className="lira sign icon"></i>{this.props.price}
                    </Link>
                    <div className="ui container">Bu üründen {this.state.qty} adet
                    </div>
                    <button onClick={()=> {this.setState({qty:this.state.qty+1})}}><i className="plus icon left"></i></button>
                    <button onClick={()=> {if(this.state.qty>1) this.setState({qty:this.state.qty-1})}}><i className="minus icon left"></i></button>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return ({customerBasket:state.customerBasket,customerLoginStatus:state.customerLoginStatus});
};

export default connect (mapStateToProps,{addProductToCustomerBasket,cleanLoginStatusText})(ProductCard);

