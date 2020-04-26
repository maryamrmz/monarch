import React, { useState, useEffect } from "react";
import { DashboardItem } from "../dashboard-item/dashboard-item.component";

import { DashboardContainer } from "./dashboard.styles";

const Dashboard = () => {
    const [box, setBox] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((items) => setBox(items.boxes));
    });

    return (
        <DashboardContainer>
            {box.map(({ id, ...otherItemProps }) => (
                <DashboardItem key={id} {...otherItemProps} />
            ))}
        </DashboardContainer>
    );
};

export default Dashboard;
