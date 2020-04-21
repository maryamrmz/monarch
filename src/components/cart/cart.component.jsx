import React, { Component } from "react";
import { CartList } from "../cart-list/cart-list.component";

import "./cart.styles.scss";

class Cart extends Component {
    constructor() {
        super();

        this.state = {
            cart: [],
        };
    }

    componentDidMount() {
        fetch("data.json")
            .then((data) => data.json())
            .then((items) => this.setState({ cart: items.lists }));
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
            </div>
        );
    }
}

export default Cart;
