import React, { Component } from 'react';
import { Menu } from "../menu/menu.component";

class Header extends Component {
    constructor() {
        super()

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch("../../data.json")
            .then(res => (res.json()))
            .then(items => this.setState({ items: items }))
    }


    render() {
        return (
            <Menu items={this.state.items} />
        )
    }
}

export default Header;