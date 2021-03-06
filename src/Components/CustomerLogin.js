import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {getCustomerToken} from '../actions';
import {cleanLoginStatusText} from '../actions';

// to allow Customer to login with this component
class CustomerLogin extends Component {

    state = {
        customerEmail:"",
        customerPassword:""
    };    

    submitHandler = (e) => {
        e.preventDefault();
        this.props.getCustomerToken(this.state);
        
    };

    changeHandler = (e) => {
        if (e.target.name==="email") this.setState({customerEmail:e.target.value});
        if (e.target.name==="password") this.setState({customerPassword:e.target.value});
        this.props.cleanLoginStatusText();
    };
    
    componentDidMount() {
        this.props.cleanLoginStatusText();
    }

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        {/* <img src="" className="image" alt="logo"/> */}
                        <i className="key icon"></i>
                        <div className="content">Log-in to your account</div>
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
                                    <input onChange={(e)=>this.changeHandler(e)} type="password" name="password" placeholder="Password" autoComplete="on"/>
                                </div>
                            </div>
                            <button className="ui fluid large teal submit button">Login</button>
                            <span>{this.props.customerLoginStatus}</span>
                        </div>
                        <div className="ui error message"></div>
                    </form>


                    <div className="ui message">New to us? <Link to="/customers/register">Register</Link></div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return ({customerLoginStatus:state.customerLoginStatus});
};

export default connect (mapStateToProps,{getCustomerToken,cleanLoginStatusText})(CustomerLogin);