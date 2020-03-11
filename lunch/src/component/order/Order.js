import React, { Component } from 'react';

import './Order.css';


const databaseURL = 'https://lunchbox-e853c.firebaseio.com/'
class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            orderData: {}
        }
    }

    componentDidMount(){
        this.getOrderData();
    }

    getOrderData() {
        fetch(`${databaseURL}/order.json`)
        .then(res => {
            if (res.status !== 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }). then(res => {
            this.setState({
                orderData : res
            })
        })
    }
    render() {
        return (
            <div>
                <div className="order_Top">
                    <div className="orderTop_back" />
                    img space
                    <div className="orderTop_text">
                        My Order
                    </div>
                </div>
                <div className="myOrder">
                    {Object.keys((this.state.orderData)).map(idx => {
                        const o = this.state.orderData[idx];
                        return (
                            <div className="menuContent">
                                <OrderInfo name={o.name}
                                        price={o.price}
                                        img={o.img}
                                        datePurchased={o.datePurchased}
                                        status={o.status}
                                        dateDelivery={o.dateDelivery} />
                            </div>
                        )
                    })}
                </div>
                <br />
            </div>
        )
    };
}

class OrderInfo extends Component {
    render() {
        return (
            <div className="order_root">
                img space
                <div className="orderinfo_content">
                    <div className="orderinfo_contTop">
                        <div className="orderinfo_name">
                            {this.props.name}
                        </div>
                    </div>
                    <div className="orderinfo_contMid">
                        <div className="orderinfo_price">
                            Price : {this.props.price}
                        </div>
                    </div>
                    <div className="orderinfo_purchase">
                        Date Purchased : {this.props.datePurchased}
                    </div>
                    <div className="orderinfo_delivery">
                        Date Delivery : {this.props.dateDelivery}
                    </div>
                    <div className="orderinfo_contBot">
                        <div className="orderinfo_status">
                            {this.props.status}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Order;