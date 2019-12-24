import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCustomerProfile} from '../actions';

class CustomerProfile extends Component {
    
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
    };

    changeHandler = (e) => {
        // if (e.target.name==="email") this.setState({customerEmail:e.target.value});
        // if (e.target.name==="password") this.setState({customerPassword:e.target.value});
        // if (e.target.name==="nameAndSurname") this.setState({customerName:e.target.value});
        // if (e.target.name==="address") this.setState({customerAddress:e.target.value});
        // if (e.target.name==="zipcode") this.setState({customerZipcode:e.target.value});
        // if (e.target.name==="city") this.setState({customerCity:e.target.value});
        // if (e.target.name==="country") this.setState({customerCountry:e.target.value});
        // if (e.target.name==="phoneno") this.setState({customerPhoneNo:e.target.value});
        // if (e.target.name==="image") this.setState({customerImage:e.target.value});
    };

    componentDidMount() {
        if(!this.props.customerProfile) {
            this.props.getCustomerProfile();
        };
    };

    render() {
        if(this.props.customerProfile) {
            return (
                <div className="ui middle aligned center aligned grid">
                    <div className="column">
                        <h2 className="ui teal image header">
                            <i className="paint brush icon"></i>
                            <div className="content">Dear Customer, here is your accout information</div>
                            <i className="smile icon"></i>
                        </h2>
                        <form onSubmit={this.submitHandler} className="ui large form">
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="envelope icon"></i>
                                        <input onChange={(e)=>this.changeHandler(e)} type="email" name="email" placeholder="email" value={this.props.customerProfile.customerEmail} autoComplete="on" disabled/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <input onChange={(e)=>this.changeHandler(e)} type="password" name="password" placeholder="password" value={this.props.customerProfile.customerPassword} autoComplete="off" disabled/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input onChange={(e)=>this.changeHandler(e)} type="nameAndSurname" name="nameAndSurname" placeholder="Full Name" value={this.props.customerProfile.customerName} autoComplete="on" disabled/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="map marker alternate icon"></i>
                                        <input onChange={(e)=>this.changeHandler(e)} type="address" name="address" placeholder="Address" value={this.props.customerProfile.customerAddress} autoComplete="on" disabled/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="barcode icon"></i>
                                        <input onChange={(e)=>this.changeHandler(e)} type="zipcode" name="zipcode" placeholder="Zipcode" value={this.props.customerProfile.customerZipcode} autoComplete="on" disabled/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="map signs icon"></i>
                                        <input onChange={(e)=>this.changeHandler(e)} type="city" name="city" placeholder="City" value={this.props.customerProfile.customerCity} autoComplete="on" disabled/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="flag icon"></i>
                                        <input onChange={(e)=>this.changeHandler(e)} type="country" name="country" value={this.props.customerProfile.customerCountry} placeholder="Country" autoComplete="on" disabled/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="phone icon"></i>
                                        <input onChange={(e)=>this.changeHandler(e)} type="phoneno" name="phoneno" value={this.props.customerProfile.customerPhoneNo} placeholder="Phone Number" autoComplete="on" disabled/>
                                    </div>
                                </div>
                                {/* <button className="ui fluid large teal submit button">Change Password?</button> */}
                                <span>{this.props.customerLoginStatus}</span>
                            </div>
                            <div className="ui error message"></div>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    {this.props.customerLoginStatus}
                </div>
            )
        }

        
    };
};

const mapStateToProps = (state) => {
    return ({
        customerLoginStatus:state.customerLoginStatus,
        customerProfile:state.customerProfile
    });
};

export default connect (mapStateToProps,{getCustomerProfile})(CustomerProfile);
