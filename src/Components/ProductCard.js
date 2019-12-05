import React from 'react';
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    return (
        <div className="ui card">
            <div className="content">
                <Link to="/vendor/login" className="header">{props.name}</Link>
                <Link to="/vendor/login" className="header">{props.city}</Link>
                <div className="meta">
                <span className="date">Stok {props.qty} KG</span>
                </div>
                <div><span>Paket tipi - {props.unit}</span></div>
            </div>
            <div className="extra content">
            <button><i className="shopping basket icon right"></i></button>
                <Link to="/vendor/login" >
                <i className="lira sign icon"></i>
                {props.price} TL
                </Link>
            </div>
        </div>
    );
};
