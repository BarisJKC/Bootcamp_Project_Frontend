import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCustomerRegister} from '../actions';
import {cleanLoginStatusText} from '../actions';

// to get a new customer register into database without an image
class CustomerRegister extends Component {
    state = {
        customerEmail:"",
        customerPassword:"",
        customerName:"",
        customerAddress:"",
        customerZipcode:"",
        customerCity:"",
        customerCountry:"",
        customerPhoneNo:"",
        customerImage:""
    };    

    submitHandler = (e) => {
        e.preventDefault();
        this.props.getCustomerRegister(this.state);
    };

    changeHandler = (e) => {
        if (e.target.name==="email") this.setState({customerEmail:e.target.value});
        if (e.target.name==="password") this.setState({customerPassword:e.target.value});
        if (e.target.name==="nameAndSurname") this.setState({customerName:e.target.value});
        if (e.target.name==="address") this.setState({customerAddress:e.target.value});
        if (e.target.name==="zipcode") this.setState({customerZipcode:e.target.value});
        if (e.target.name==="city") this.setState({customerCity:e.target.value});
        if (e.target.name==="country") this.setState({customerCountry:e.target.value});
        if (e.target.name==="phoneno") this.setState({customerPhoneNo:e.target.value});
        // if (e.target.name==="image") this.setState({customerImage:e.target.value});
    };

    componentDidMount(){
        this.props.cleanLoginStatusText();
    };

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <i className="paint brush icon"></i>
                        <div className="content">Dear Customer, here is our registry form and enjoy your day :)</div>
                    </h2>
                    <form onSubmit={this.submitHandler} className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="envelope icon"></i>
                                    <input onChange={(e)=>this.changeHandler(e)} type="email" name="email" placeholder="E-mail address" autoComplete="on" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input onChange={(e)=>this.changeHandler(e)} type="password" name="password" placeholder="Password" autoComplete="off"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input onChange={(e)=>this.changeHandler(e)} type="nameAndSurname" name="nameAndSurname" placeholder="Full Name" autoComplete="on"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="map marker alternate icon"></i>
                                    <input onChange={(e)=>this.changeHandler(e)} type="address" name="address" placeholder="Address" autoComplete="on"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="barcode icon"></i>
                                    <input onChange={(e)=>this.changeHandler(e)} type="zipcode" name="zipcode" placeholder="Zipcode" autoComplete="on"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="map signs icon"></i>
                                    <input onChange={(e)=>this.changeHandler(e)} type="city" name="city" placeholder="City" autoComplete="on"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="flag icon"></i>
                                    <input onChange={(e)=>this.changeHandler(e)} type="country" name="country" placeholder="Country" autoComplete="on"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="phone icon"></i>
                                    <input onChange={(e)=>this.changeHandler(e)} type="phoneno" name="phoneno" placeholder="Phone Number" autoComplete="on"/>
                                </div>
                            </div>
                            <button className="ui fluid large teal submit button">Register</button>
                            <span>{this.props.customerLoginStatus}</span>
                        </div>
                        <div className="ui error message"></div>
                    </form>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return ({
        customerLoginStatus:state.customerLoginStatus,
        customerRegister:state.customerRegister
    });
};

export default connect (mapStateToProps,{getCustomerRegister,cleanLoginStatusText})(CustomerRegister);