import React, { Component } from "react";
import { Menu } from "../menu/menu.component";

import "./header.styles.scss";

class Header extends Component {
    constructor() {
        super();

        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch("data.json")
            .then((res) => res.json())
            .then((items) => this.setState({ items: items }));
    }

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <div className='header__logo'>
                        <div className='logo'></div>
                        <div className='demo'></div>
                    </div>
                    <div className='header__menu'>
                        {this.state.items.map(({ id, ...otherItemProps }) => (
                            <Menu key={id} {...otherItemProps} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
