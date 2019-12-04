import React from 'react';
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    return (
        <div className="ui card">
            <div className="content">
                <Link to="/vendor/login" className="header">{props.name}</Link>
                <div className="meta">
                <span className="date">{props.type}</span>
                </div>
            </div>
            <div className="extra content">
                <Link to="/vendor/login" >
                <i className="balance scale icon"></i>
                {props.unit}
                </Link>
            </div>
        </div>
    );
};
