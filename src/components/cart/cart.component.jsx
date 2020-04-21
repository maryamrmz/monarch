import React, { Component } from "react";
import { CartList } from "../cart-list/cart-list.component";
import { DashboardItem } from "../dashboard-item/dashboard-item.component";

import "./cart.styles.scss";

class Cart extends Component {
    constructor() {
        super();

        this.state = {
            cart: [],
            box: [],
        };
    }

    componentDidMount() {
        fetch("data.json")
            .then((data) => data.json())
            .then((items) =>
                this.setState({ cart: items.lists, box: items.boxes })
            );
    }

    render() {
        return (
            <div className='columns'>
                <div className='left-column'>
                    <ul>
                        {this.state.cart.map(({ id, ...otherItemProps }) => (
                            <CartList key={id} {...otherItemProps} />
                        ))}
                    </ul>
                </div>
                <div className='right-column'>
                    <div className='charts'>
                        <div className='summary'>
                            {this.state.box.map(({ id, ...otherItemProps }) => (
                                <DashboardItem key={id} {...otherItemProps} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
