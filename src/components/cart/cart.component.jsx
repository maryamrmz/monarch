import React from "react";
import Sidebar from "../sidebar/sidebar.component";
import Dashboard from "../dashboard/dashboard.component";

import "./cart.styles.scss";

function Cart() {
    return (
        <div className='columns'>
            <div className='left-column'>
                <ul>
                    <Sidebar />
                </ul>
            </div>
            <div className='right-column'>
                <Dashboard />
            </div>
        </div>
    );
}

export default Cart;
