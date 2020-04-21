import React, { Component } from 'react';
import { DashboardItem } from "../dashboard-item/dashboard-item.component";

import "./dashboard.styles.scss";

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
            <div className='charts'>
                <div className='summary'>
                    {this.state.box.map(({ id, ...otherItemProps }) => (
                        <DashboardItem key={id} {...otherItemProps} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Dashboard;