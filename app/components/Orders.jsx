import React from 'react';
import Order from './Order';
import ReactDom from 'react-dom';

export default class Orders extends React.Component {
    render() {
        const {ticket, onClick = () => { }, onChangePortion = () => { }, onCancelOrder = () => { } } = this.props;
        return (
            <div className="orders" id="orders">
                {ticket.orders.map(({uid, name, quantity, price, priceTag, portion, productId}) =>
                    <Order key={uid}
                        name={name}
                        quantity={quantity}
                        price={price.toFixed(2) }
                        priceTag={priceTag}
                        portion={portion}
                        productId={productId}
                        onClick={onClick}
                        orderUid={uid}
                        onChangePortion={onChangePortion}
                        onCancelOrder={onCancelOrder}/>
                ) }
            </div>
        );
    }

    componentDidUpdate() {
        var node = ReactDom.findDOMNode(this);
        if (node) {
            node.scrollTop = node.scrollHeight;
        }
    }
} 