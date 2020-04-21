import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

import "./App.css";

function App() {
    return (
        <div className='container'>
            <Switch>
                <Route exact path='/' component={HomePage} />
            </Switch>
        </div>
    );
}

export default App;
