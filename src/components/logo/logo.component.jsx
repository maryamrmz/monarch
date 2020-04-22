import React, { Component } from "react";
import { LogoItem } from "../logo-item/logo-item.component";

import "./logo.styles.scss";

class Logo extends Component {
    constructor() {
        super();

        this.state = {
            logo: [],
        };
    }

    componentDidMount() {
        fetch("data.json")
            .then((res) => res.json())
            .then((items) => this.setState({ logo: items.logoItems }));
    }

    render() {
        return (
            <div className='head__logo'>
                {this.state.logo.map(({ id, ...otherItemProps }) => (
                    <LogoItem key={id} {...otherItemProps} />
                ))}
            </div>
        );
    }
}

export default Logo;
