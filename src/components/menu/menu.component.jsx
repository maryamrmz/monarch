import React, { Component } from "react";
import { MenuItem } from "../menu-item/menu-item.component";

import "./menu.styles.scss";

class Menu extends Component {
    constructor() {
        super();

        this.state = {
            menu: [],
        };
    }

    componentDidMount() {
        fetch("data.json")
            .then((res) => res.json())
            .then((items) => this.setState({ menu: items.menuItems }));
    }

    render() {
        return (
            <div className='head__menu'>
                {this.state.menu.map(({ id, ...otherItemProps }) => (
                    <MenuItem key={id} {...otherItemProps} />
                ))}
            </div>
        );
    }
}

export default Menu;
