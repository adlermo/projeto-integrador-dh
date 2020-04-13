import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './dashboard.js';

 const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );    
}

export default Routes;