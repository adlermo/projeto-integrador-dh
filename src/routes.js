import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Logon from './pages/Logon';
import Register from './pages/Register';
import EditProfile from './pages/EditProfile';
import Orcamentos from './pages/Orcamentos';
import Dashboard from './pages/Dashboard';
import Donut from './pages/Donut';
import Body from './pages/Body';

 const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={Home} />
                <Route  path="/profile" exact component={Profile} />
                <Route  path="/logon" exact component={Logon} />
                <Route  path="/register" component={Register} />
                <Route  path="/editprofile" component={EditProfile} />
                <Route  path="/orcamentos" component={Orcamentos} />
                <Route  path="/dashboard" component={Dashboard} />
                <Route  path="/donut" component={Donut} />
                <Route  path="/body" component={Body} />
            </Switch>
        </BrowserRouter>
    );    
}

export default Routes;