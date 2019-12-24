import React, { Component } from 'react'

export default class CustomerPasswordChange extends Component {
    
    state = {
        customerEmail:"",
        customerPassword:"",
        customerNewPassword:""
    };    

    submitHandler = (e) => {
        e.preventDefault();
        this.props.getCustomerPasswordChanged(this.state);
        
    };

    changeHandler = (e) => {
        if (e.target.name==="email") this.setState({customerEmail:e.target.value});
        if (e.target.name==="password") this.setState({customerPassword:e.target.value});
        if (e.target.name==="newPassword") this.setState({customerNewPassword:e.target.value});
        this.props.cleanLoginStatusText();
    };

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
                            <button className="ui fluid large teal submit button">Update Password</button>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input onChange={(e)=>this.changeHandler(e)} type="new password" name="newPassword" placeholder="New Password" autoComplete="on"/>
                                </div>
                            </div>
                            <button className="ui fluid large teal submit button">Update Password</button>
                            <span>{this.props.customerLoginStatus}</span>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
