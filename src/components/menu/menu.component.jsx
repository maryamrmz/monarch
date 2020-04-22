import React, { Component, Fragment } from 'react';
import { MenuItem } from "../menu-item/menu-item.component";

class Menu extends Component {
    constructor() {
        super()

        this.state = {
            menu: []
        }
    }

    componentDidMount() {
        fetch("data.json")
            .then(res => res.json())
            .then(items => this.setState({ menu: items.menuItems }))
    }

    render() {
        return (
            <Fragment>
                {this.state.menu.map(({ id, ...otherItemProps }) => (
                    <MenuItem key={id} {...otherItemProps} />
                ))}
            </Fragment>

        )
    }
}

export default Menu;