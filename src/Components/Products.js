import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Spinner from './Spinner';
import Modal from './Modal';
import ProductCard from './ProductCard';
import {getProducts} from '../actions';
import {getVendors} from '../actions';
import {updateCustomerBasket} from '../actions';
import {cleanLoginStatusText} from '../actions';
import {createCustomerOrder} from '../actions';

//  to get all Products and create a render status for products
class Products extends Component {
    
    state = {
        stateId:"",
        isOrder:false,
        searchedProduct:""
        // isSearched:false
    };

    renderVendorProductList = (id) =>{        
        if (this.props.vendors.length>0) {
            if(id==="") { // to render all products of all vendors
                let renderThis=[];
                this.props.vendors.forEach(vendor => {
                    const renderTemp = vendor.vendorPortfolio.map(({_id,vendorProduct,vendorQty,vendorPrice}) => {
                        return (
                            <ProductCard key={_id} vendorId={vendor._id} productId={vendorProduct._id} vendor={vendor.vendorName} city={vendor.vendorCity} name={vendorProduct.productName} type={vendorQty} qty={vendorQty} price={vendorPrice} unit={vendorProduct.productUnit} URL={vendorProduct.productImage} />
                        );
                    });
                    renderThis.push(renderTemp);
                });
                return renderThis;
            } else if (id.length>20) { // to render all products of one vendor
                if (this.state.stateId!==id) this.setState({stateId:id});
                const selectedVendor = this.props.vendors.find(vendor=>vendor._id===id);
                let selectedVendorArray=[];
                selectedVendorArray.push(selectedVendor);
                const renderThis = selectedVendorArray[0].vendorPortfolio.map(({_id,vendorProduct,vendorQty,vendorPrice}) => {
                    return (
                        <ProductCard key={_id} vendorId={selectedVendor._id} productId={vendorProduct._id} vendor={selectedVendor.vendorName} city={selectedVendor.vendorCity} name={vendorProduct.productName} qty={vendorQty} price={vendorPrice} unit={vendorProduct.productUnit}  URL={vendorProduct.productImage} />
                    );
                });
                return renderThis;                
            } else if (this.state.isSearched) { // to render all products based on search text
                // let temp1 = []; // temp2 and 3 var for portfolio,  
                // let temp2 = []; // temp2 and 3 var for portfolio,  
                let temp4 = [];  // temp1 and 4 var for vendors

                // this.setState({tempRender:this.props.vendors})
                // if (this.state.tempRender.length>0) 
                // temp1 = this.state.tempRender;
                // temp1 = this.props.vendors;

                for (var j = 0; j<this.props.vendors.length; j++) {
                    
                    // temp2 = this.props.vendors[j].vendorPortfolio;
                    var temp3 = []; // temp2 and 3 var for portfolio,  
                    for (var i = 0; i<this.props.vendors[j].vendorPortfolio.length; i++) {
                        if(this.props.vendors[j].vendorPortfolio[i].vendorProduct.productName.toLocaleLowerCase('tr').startsWith(this.state.stateId.toLocaleLowerCase('tr'))) {
                            temp3.push(this.props.vendors[j].vendorPortfolio[i])
                        }
                    };
                    let temp5 = undefined;
                    if (temp3.length>0) {
                        temp5 = {...this.props.vendors[j]}
                        temp5.vendorPortfolio = temp3;
                        temp4.push(temp5);
                    };
                };
                let renderThis=[];

                temp4.forEach(vendor => {
                    const renderTemp = vendor.vendorPortfolio.map(({_id,vendorProduct,vendorQty,vendorPrice}) => { 
                        return (
                            <ProductCard key={_id} vendorId={vendor._id} productId={vendorProduct._id} vendor={vendor.vendorName} city={vendor.vendorCity} name={vendorProduct.productName} type={vendorQty} qty={vendorQty} price={vendorPrice} unit={vendorProduct.productUnit} URL={vendorProduct.productImage} />
                        );
                    });
                    renderThis.push(...renderTemp);
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
                    <Link to="/products" onClick={async ()=>{await this.setState({isSearched:false});this.renderVendorProductList(_id)}} key={_id}><div>{vendorName} - {vendorCity}</div></Link>
                );
            });
            return renderThis;
        } else {
            return <div><Spinner /></div>;
        };
    };

    renderBasket = () => {
        if(this.props.customerBasket.length>0) {
            const renderThis = this.props.customerBasket.map(({itemName,itemUnit,itemCity,itemQty,itemValue},index)=> {
                return (
                    <div key={index}>
                        <div>{itemName}-{itemUnit}-{itemCity}-{itemQty} paket -{itemValue} TL </div>
                        <button onClick={()=>this.props.updateCustomerBasket(index)}><i className="close icon left"></i></button>
                    </div>
                );
            });
            return renderThis; 
        } else { 
            return ("Sepetiniz boş");
        };
    };

    renderOrderButton() {
        if(this.props.customerBasketValue>0 && this.props.customerProfile!=="") {
            return <button onClick={()=>this.setState({isOrder:true})}>Siparişi ver</button>
        };
    };

    renderModel=()=> {
        if(this.state.isOrder) {
            return <Modal css={this.state.isOrder} header="Siparişiniz için emin misiniz?" text={this.props.customerBasketValue} buttons={this.renderModelButtons()} />
        };
    };

    renderModelButtons = () => {
        return (
            <React.Fragment>
                <button className="ui green button" onClick={()=>this.props.createCustomerOrder()}>Evet</button>
                <button className="ui red button" onClick={()=>{this.setState({isOrder:false})}}>Hayır</button>
            </React.Fragment>
        )
    }

    componentDidMount() {
        if(this.props.customerBasket.length>0) this.props.cleanLoginStatusText();
        this.props.getProducts();
        this.props.getVendors();
    };

    changeHandler = async (e) => {
        this.state.isSearched ? await this.setState({searchedProduct:e.target.value,stateId:this.state.stateId}) : await this.setState({searchedProduct:e.target.value,isSearched:false,stateId:""})
    };

    submitHandler = async (e) => {
        e.preventDefault();
        await this.setState({stateId:this.state.searchedProduct});
        this.state.stateId === "" ? await this.setState({isSearched:false}) : await this.setState({isSearched:true})
    };

    render() {
        return (
            <div className="ui padded grid">
                <div className="four wide olive column"><Link to="/products" onClick={()=>this.setState({stateId:"",isSearched:false})}><div>Tüm Tedarikçiler</div></Link>{this.renderVendorList()}</div>
                <div className="seven wide column">

                <div className="ui fluid category search">
                    <div className="ui icon input" >
                        <form onSubmit={this.submitHandler}>
                            <div className="field">
                                <div className="ui left icon input">
                                    <input onChange={(e)=>this.changeHandler(e)} type="text" name="search" placeholder="Ürün arama..." autoComplete="off"/>
                                    <i className="search icon"></i>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="results"></div>
                </div>
                {this.renderVendorProductList(this.state.stateId)}

                </div>
                <div className="four wide olive column">Sepetim; Değeri: {this.props.customerBasketValue} TL {this.renderOrderButton()}
                    <div>{this.props.customerLoginStatus}</div>
                    <div>{this.renderBasket()}</div>
                </div>
                <div>{this.renderModel()}</div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return ({
        products:state.products,
        vendors:state.vendors,
        customerLoginStatus:state.customerLoginStatus,
        customerBasket:state.customerBasket,
        customerBasketValue:state.customerBasketValue,
        customerOrderStatus:state.customerOrderStatus,
        customerProfile:state.customerProfile
    });
};

export default connect (mapStateToProps,{
    getProducts,
    getVendors,
    updateCustomerBasket,
    cleanLoginStatusText,
    createCustomerOrder})(Products);


