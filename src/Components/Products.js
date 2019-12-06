import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Spinner from './Spinner';
import ProductCard from './ProductCard';
import {getProducts} from '../actions';
import {getVendors} from '../actions';
import {updateCustomerBasket} from '../actions';

//  to get all Products and create a render status for products
class Products extends Component {
    
    state = {
        stateId:""
    };

    renderThisVendorProductList = (id) =>{        
        if (this.props.vendors.length>0) {
            if(id==="" && !this.state.stateId.length>0) { // to render all products of all vendors
                let renderThis=[];
                this.props.vendors.forEach(vendor => {
                    const renderTemp = vendor.vendorPortfolio.map(({_id,vendorProduct,vendorQty,vendorPrice}) => {
                        return (
                            <ProductCard key={_id} vendorId={vendor._id} productId={vendorProduct._id} vendor={vendor.vendorName} city={vendor.vendorCity} name={vendorProduct.productName} type={vendorQty} qty={vendorQty} price={vendorPrice} unit={vendorProduct.productUnit} />
                        );
                    });
                    renderThis=[...renderTemp,renderThis];
                });
                return (renderThis);
            } else if (id!==undefined && id!=="") { // to render all products of one vendor
                if (this.state.stateId!==id) this.setState({stateId:id});
                const selectedVendor = this.props.vendors.find(vendor=>vendor._id===id);
                let selectedVendorArray=[];
                selectedVendorArray.push(selectedVendor);
                const renderThis = selectedVendorArray[0].vendorPortfolio.map(({_id,vendorProduct,vendorQty,vendorPrice}) => {
                    return (
                        <ProductCard key={_id} vendorId={selectedVendor._id} productId={vendorProduct._id} vendor={selectedVendor.vendorName} city={selectedVendor.vendorCity} name={vendorProduct.productName} qty={vendorQty} price={vendorPrice} unit={vendorProduct.productUnit} />
                    );
                });
                return renderThis;                
            };
        } else {
            return <div><Spinner /></div>;
        };
    };

    renderVendorList() {
        if (this.props.vendors.length>0) {
            const renderThis = this.props.vendors.map(({_id,vendorName,vendorCity}) => {
                return (
                    <Link to="/products" onClick={()=>this.renderThisVendorProductList(_id)} key={_id}><div>{vendorName} - {vendorCity}</div></Link>
                );
            });
            return renderThis;
        } else {
            return <div><Spinner /></div>;
        };
    };

    renderBasket = () => {
        if(this.props.customerBasket.length>0) {

            const renderThis = this.props.customerBasket.map(({itemName,itemUnit,itemCity,itemQTy},index)=> {
                return (
                    <div key={index}>
                        <div>{itemName}-{itemUnit}-{itemCity}-{itemQTy} paket</div>
                        <button onClick={()=>this.props.updateCustomerBasket(index)}><i className="minus icon left"></i></button>
                    </div>
                );
            });
            return renderThis; 
        } else { 
            return ("Sepetiniz boş");
        };
    };

    componentDidMount() {
        this.props.getProducts();
        this.props.getVendors();
    };

    render() {
        return (
            <div className="ui padded grid">
                <div className="four wide column"><Link to="/products" onClick={()=>this.setState({stateId:""})}><div>Tümü</div></Link>{this.renderVendorList()}</div>
                {/* <div className="one wide column"></div> */}
                <div className="seven wide column">{this.renderThisVendorProductList(this.state.stateId)}</div>
                <div className="four wide column">Sepetim
                    <div>{this.props.customerLoginStatus}</div>
                    <div>{this.renderBasket()}</div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return ({
        products:state.products,
        vendors:state.vendors,
        customerLoginStatus:state.customerLoginStatus,
        customerBasket:state.customerBasket
    });
};

export default connect (mapStateToProps,{getProducts,getVendors,updateCustomerBasket})(Products);


