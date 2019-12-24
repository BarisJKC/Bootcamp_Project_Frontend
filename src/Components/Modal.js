import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {

    render () {
        return ReactDOM.createPortal(
                <div className="ui dimmer modals visible active">
                    <div onClick={(e)=>e.stopPropagation()} className="ui tiny modal visible active">
                        <div className="header">
                            {this.props.header}
                        </div>
                        <div className="content">{this.props.text} TL</div>
                        <div className="actions">
                            {this.props.buttons}
                        </div>
                    </div>
                </div>
            ,document.getElementById('modal')
        )
    }
}

export default Modal;