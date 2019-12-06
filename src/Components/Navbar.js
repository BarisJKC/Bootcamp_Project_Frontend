import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="ui stackable secondary pointing menu">
      <Link to="/" className={`item ${props.history.location.pathname==="/" ? "active" : ""}`}>
        Main
      </Link>
      <Link to="/admins" className={`item ${props.history.location.pathname==="/admins" ? "active" : ""}`}>
        Admins
      </Link>
      <Link to="/comments" className={`item ${props.history.location.pathname==="/comments" ? "active" : ""}`}>
        Comments
      </Link>
      <Link to="/customers/login" className={`item ${props.history.location.pathname==="/customers/login" ? "active" : ""}`}>
        Login
      </Link>
      <Link to="/customers/register" className={`item ${props.history.location.pathname==="/customers/register" ? "active" : ""}`}>
        Register
      </Link>
      <Link to="/orders" className={`item ${props.history.location.pathname==="/orders" ? "active" : ""}`}>
        My Orders
      </Link>
      <Link to="/products" className={`item ${props.history.location.pathname==="/products" ? "active" : ""}`}>
        Products
      </Link>
      <Link to="/vendors" className={`item ${props.history.location.pathname==="/vendors" ? "active" : ""}`}>
        Vendors
      </Link>
    </div>
  );
};

