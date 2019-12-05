import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions';
import Spinner from './Spinner';
import ProductCard from './ProductCard';
import {getVendors} from '../actions';
import { Link } from "react-router-dom";

//  to get all Products and create a render status for products
class Products extends Component {
    
    state = {
        stateId:""
    }

    renderProductList() {
        if (this.props.products.length>0) {
            const renderThis = this.props.products.map(({_id,productName,productType,productUnit}) => {
                return (
                    <ProductCard key={_id} name={productName} type={productType} unit={productUnit} />
                );
            });
            return renderThis;
        } else {
            return <div><Spinner /></div>;
        };
    };

    renderVendorProductList() {
        if (this.props.vendors.length>0) {
            const renderThis = this.props.vendors[0].vendorPortfolio.map(({_id,vendorProduct,vendorQty,vendorPrice}) => {
                return (
                    <ProductCard key={_id} name={vendorProduct.productName} type={vendorQty} unit={vendorPrice} />
                );
            });
            return renderThis;
        } else {
            return <div><Spinner /></div>;
        };
    };

    renderThisVendorProductList = (id) =>{
        
        if (this.props.vendors.length>0) {
            console.log(id);
            console.log(this.state.stateId.length);
            if(id==="" && !this.state.stateId.length>0) {
                
                let renderThis=[];
                this.props.vendors.forEach(vendor => {
                    const renderTemp = vendor.vendorPortfolio.map(({_id,vendorProduct,vendorQty,vendorPrice}) => {
                        return (
                            <ProductCard key={_id} city={vendor.vendorCity} name={vendorProduct.productName} type={vendorQty} price={vendorPrice} unit={vendorProduct.productUnit} />
                        );
                    });
                    renderThis=[...renderTemp,renderThis]
                    console.log(renderThis)
                });
                
                // const vendor=this.props.vendors[0].vendorName;
                // const renderThis = this.props.vendors[0].vendorPortfolio.map(({_id,vendorProduct,vendorQty,vendorPrice}) => {
                //     return (
                //         <ProductCard key={_id} vendor={vendor} name={vendorProduct.productName} type={vendorQty} unit={vendorPrice} />
                //     );
                // });
                console.log('Üst taraf',renderThis)
                return (renderThis);

            } else if (id!==undefined && id!=="") {
                
                if (this.state.stateId!==id) this.setState({stateId:id});
                console.log('state', this.state.stateId)
                console.log('ID var',id);
                console.log(this.props.vendors)
                const selectedVendor = this.props.vendors.find(vendor=>vendor._id===id);
                let selectedVendorArray=[];
                selectedVendorArray.push(selectedVendor);
                console.log('secilen tedarkiçi array',selectedVendorArray)
                console.log('secilen tedarkiçi',selectedVendor)
                const renderThis = selectedVendorArray[0].vendorPortfolio.map(({_id,vendorProduct,vendorQty,vendorPrice}) => {
                    return (
                        <ProductCard key={_id} vendor={selectedVendor.vendorName} city={selectedVendor.vendorCity} name={vendorProduct.productName} qty={vendorQty} price={vendorPrice} unit={vendorProduct.productUnit} />
                    );
                });
                console.log('Alt taraf',renderThis)
                return renderThis;
                // const renderThis=`<ProductCard key="${selectedVendor._id}" name="${selectedVendor.vendorPortfolio[0].vendorProduct.productName}" type="${selectedVendor.vendorPortfolio[0].vendorQty}" unit="${selectedVendor.vendorPortfolio[0].vendorPrice}" />`
                // console.log(renderThis)
                // const renderThis = selectedVendor.vendorPortfolio.map(({_id,vendorProduct,vendorQty,vendorPrice}) => {
                //     return (
                //         <ProductCard key={_id} name={vendorProduct.productName} type={vendorQty} unit={vendorPrice} />
                //     );
                // });
                // console.log()
                // return (renderThis);
                
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

    componentDidMount() {
        this.props.getProducts();
        this.props.getVendors();
    };

    render() {
        return (
            <div className="ui padded grid">
                <div className="four wide column"><Link to="/products" onClick={()=>this.setState({stateId:""})}><div>All</div></Link>{this.renderVendorList()}</div>
                <div className="one wide column"></div>
                <div className="eleven wide column">{this.renderThisVendorProductList(this.state.stateId)}</div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return ({products:state.products,vendors:state.vendors});
};

export default connect (mapStateToProps,{getProducts,getVendors})(Products);


