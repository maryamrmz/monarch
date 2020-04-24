import React, { Component } from 'react';
import { DashboardItem } from "../dashboard-item/dashboard-item.component";

import { DashboardContainer } from "./dashboard.styles";

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            box: []
        }
    }

    componentDidMount() {
        fetch("data.json")
            .then(res => res.json())
            .then(items => this.setState({ box: items.boxes }))
    }

    render() {
        return (
            <DashboardContainer>
                {this.state.box.map(({ id, ...otherItemProps }) => (
                    <DashboardItem key={id} {...otherItemProps} />
                ))}
            </DashboardContainer>
        )
    }
}

export default Dashboard;