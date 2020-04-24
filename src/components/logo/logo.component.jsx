import React, { Component } from "react";
import { LogoItem } from "../logo-item/logo-item.component";

import { HeaderLogoContainer } from "./logo.styles";

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
            <HeaderLogoContainer>
                {this.state.logo.map(({ id, ...otherItemProps }) => (
                    <LogoItem key={id} {...otherItemProps} />
                ))}
            </HeaderLogoContainer>
        );
    }
}

export default Logo;
