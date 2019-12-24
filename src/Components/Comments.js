import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getComments} from '../actions';

class Comments extends Component {
    componentDidMount(){
        // this.props.getComments();
    }
    
    render() {
        return (
            <div>
                {/* <button onClick={()=>this.props.getComments()}>Get Comments</button> */}
                Comments
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({customerLoginStatus:state.customerLoginStatus});
};

export default connect (mapStateToProps,{getComments})(Comments);

