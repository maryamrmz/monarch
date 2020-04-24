import React from "react";
import Sidebar from "../sidebar/sidebar.component";
import Dashboard from "../dashboard/dashboard.component";

import { ColumnsContainer, LeftColumnContainer, RightColumnContainer } from "./main-container.styles";

function MainContainer() {
    return (
        <ColumnsContainer>
            <LeftColumnContainer>
                <ul>
                    <Sidebar />
                </ul>
            </LeftColumnContainer>
            <RightColumnContainer>
                <Dashboard />
            </RightColumnContainer>
        </ColumnsContainer>
    );
}

export default MainContainer;