import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Logon from './pages/Logon';
import Register from './pages/Register';
import EditProfile from './pages/EditProfile';

 const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={Home} />
                <Route  path="/logon" exact component={Logon} />
                <Route  path="/register" component={Register} />
                <Route  path="/editprofile" component={EditProfile} />
            </Switch>
        </BrowserRouter>
    );    
}

export default Routes;