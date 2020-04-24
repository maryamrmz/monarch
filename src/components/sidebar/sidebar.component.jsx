import React, { Component } from "react";
import { SidebarList } from "../sidebar-list/sidebar-list.component";

class Sidebar extends Component {
    constructor() {
        super();

        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        fetch("data.json")
            .then((res) => res.json())
            .then((items) => this.setState({ list: items.lists }));
    }

    render() {
        return (
            <div>
                {this.state.list.map(({ id, ...otherItemProps }) => (
                    <SidebarList key={id} {...otherItemProps} />
                ))}
            </div>
        );
    }
}

export default Sidebar;
