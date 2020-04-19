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
                <div className='top-row'>
                    <div className='right-row'>
                        {this.state.items.map(
                            ({ name, className, src, badge, id }) => (
                                <Menu
                                    key={id}
                                    name={name}
                                    className={className}
                                    src={src}
                                    badge={badge}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
