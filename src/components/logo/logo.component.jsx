import React, { Component, Fragment } from "react";
import { LogoItem } from "../logo-item/logo-item.component";

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
            <Fragment>
                {this.state.logo.map(({ id, ...otherItemProps }) => (
                    <LogoItem key={id} {...otherItemProps} />
                ))}
            </Fragment>
        );
    }
}

export default Logo;
