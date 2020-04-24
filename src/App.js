import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import SidebarPage from "./pages/sidebar/sidebarPage.component";
import Header from "./components/header/header.components";

import "./App.css";

function App() {
    return (
        <div className='container'>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/sidebar' component={SidebarPage} />
            </Switch>
        </div>
    );
}

export default App;
