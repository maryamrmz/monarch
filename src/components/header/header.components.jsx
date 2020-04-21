import React, { Component } from "react";
import { Menu } from "../menu/menu.component";
import { Logo } from "../logo/logo.component";

import "./header.styles.scss";

class Header extends Component {
    constructor() {
        super();

        this.state = {
            menu: [],
            logo: [],
        };
    }

    componentDidMount() {
        fetch("data.json")
            .then((res) => res.json())
            .then((items) =>
                this.setState({
                    menu: items.menuItems,
                    logo: items.logoItems,
                })
            );
    }

    render() {
        return (
            <div className='header'>
                <div className='header__logo'>
                    {this.state.logo.map(({ id, ...otherItemProps }) => (
                        <Logo key={id} {...otherItemProps} />
                    ))}
                </div>
                <div className='header__menu'>
                    {this.state.menu.map(({ id, ...otherItemProps }) => (
                        <Menu key={id} {...otherItemProps} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Header;
