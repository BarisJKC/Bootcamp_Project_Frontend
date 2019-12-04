import React from 'react';
import { Link } from "react-router-dom";

// to list all Vendors separately with this component
export default function VendorCard(props) {
    const renderThis = props.products.map(product => {
        return (`- ${product.vendorProduct.productName} `);
    });
    
    return (
        <div className="ui card">
            {/* <div className="ui slide masked reveal image">
                <Link to="/vendor/login" className="image">
                    <img src="" className="visible content" alt="vendor.logo" />
                </Link>
                <Link to="/vendor/login" className="image">
                    <img src="" className="hidden content" alt="vendor.img" />
                </Link>
            </div> */}
            <div className="content">
                <Link to="/vendor/login" className="header">{props.name}</Link>
                <div className="meta">
                <span className="date">{props.city}</span>
                </div>
            </div>
            <div className="extra content">
                <Link to="/vendor/login" >
                <i className="shipping fast icon"></i>
                {props.products.length} {renderThis}
                </Link>
            </div>
        </div>
    );
};
