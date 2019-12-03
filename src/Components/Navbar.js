import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Main
      </Link>
      <Link to="/admins" className="item">
        Admins
      </Link>
      <Link to="/comments" className="item">
        Comments
      </Link>
      <Link to="/customers" className="item">
        Customers
      </Link>
      <Link to="/orders" className="item">
        Orders
      </Link>
      <Link to="/products" className="item">
        Products
      </Link>
      <Link to="/vendors" className="item">
        Vendors
      </Link>
    </div>
  );
};

export default Navbar;
