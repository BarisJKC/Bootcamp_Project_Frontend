import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions';
import Spinner from './Spinner';
import ProductCard from './ProductCard';

//  to get all Products and create a render status for products
class Products extends Component {
    
    renderList() {
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

    componentDidMount() {
        this.props.getProducts();
        
    };

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return ({products:state.products});
};

export default connect (mapStateToProps,{getProducts})(Products);


