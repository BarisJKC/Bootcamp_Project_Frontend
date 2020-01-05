import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import api from "../api/api"; // to use axios api

export default function Navbar(props) {
  useEffect(() => {
    const myTimer = setInterval(() => {api.get('/products');console.log("awake")}, 300000);
    return () => clearTimeout(myTimer);
  }, []);
  
  return (
    <div className="ui stackable secondary pointing menu">
      <Link to="/" className={`item ${props.history.location.pathname==="/" ? "active" : ""}`}>
        Ana Sayfa
      </Link>
      {/* <Link to="/admins" className={`item ${props.history.location.pathname==="/admins" ? "active" : ""}`}>
        Admins
      </Link>
      <Link to="/comments" className={`item ${props.history.location.pathname==="/comments" ? "active" : ""}`}>
        Comments
      </Link> */}
      <div className="left menu">
        <div className="ui simple dropdown item">
          Müşteriler
          <i className="dropdown icon"></i>
          <div className="menu disp">
            <Link to="/customers/login" className="item">Login</Link>
            <Link to="/customers/register" className="item">Register</Link>
            <Link to="/customers/profile" className="item">Profile</Link>
          </div>
        </div>
      </div>
      <Link to="/products" className={`item ${props.history.location.pathname==="/products" ? "active" : ""}`}>
        Ürünler
      </Link>
      
      {/* <div className="right menu"> */}
       {/* <div class="browse item">  */}
        {/* <Link to="/customers/login" className={`item ${props.history.location.pathname==="/customers/login" ? "active" : ""}`}>
          Login
        </Link>
        <Link to="/customers/register" className={`item ${props.history.location.pathname==="/customers/register" ? "active" : ""}`}>
          Register
        </Link>  */}
        {/* <Link to="/customers/update" className={`item ${props.history.location.pathname==="/customers/update" ? "active" : ""}`}>
          Change Password
        </Link>  */}
        {/* </div> */}
      {/* </div> */}
      {/* <div className="right menu">
      <Link to="/customers" className={`item ${props.history.location.pathname==="/customers" ? "active" : ""}`}>
          Customers <i class="dropdown icon"></i>
          <div class="ui right dropdown item">
          <div class="menu">
            <div class="item">Applications</div>
            <div class="item">International Students</div>
            <div class="item">Scholarships</div>
          </div>
          </div>
        </Link>
      </div> */}
      
      <Link to="/orders" className={`item ${props.history.location.pathname==="/orders" ? "active" : ""}`}>
        Siparişlerim
      </Link>
      <Link to="/vendors" className={`item ${props.history.location.pathname==="/vendors" ? "active" : ""}`}>
        Tedarikçiler
      </Link>
    </div>
  );
};

