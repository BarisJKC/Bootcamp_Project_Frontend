import React, { Component } from 'react';

export default class OrderCard extends Component {
    
    componentDidMount() {
        this.renderList();
        // console.log("this.props",this.props.list);

    };

    renderList =()=> {
        if (this.props.list.length>0) {
            const renderThis = this.props.list.map(({_id,orderVendor,orderProduct,orderQty,orderItemValue}) => {
                return (
                    <li key={_id} className="header"> {orderProduct.productName} - {orderProduct.productUnit} - {orderVendor.vendorCity} - {orderQty} paket - {orderItemValue} TL </li>
                );
            });
            return renderThis;
        } else {
            return ("Siparişiniz yok");
        };
    };
    
    render() {
        return (
            <div className="ui items segment">
                <div className="item">
                    <div className="content">
                        <div className="header">
                            Order Status: {this.props.status}
                        </div>
                        <div className="meta">
                            <span className="price">Order Value: {this.props.value} TL</span>
                        </div>
                        <div className="meta">
                            <span className="stay">Order Date: {this.props.date}</span>
                        </div>
                        <div className="meta">
                            <span className="stay">Order Time: {this.props.time}</span>
                        </div>
                        <div className="meta">
                            <span className="stay">Sipariş içeriği</span>
                        </div>
                        <div className="meta">
                            <ul>
                                <span className="stay">{this.renderList()}</span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
