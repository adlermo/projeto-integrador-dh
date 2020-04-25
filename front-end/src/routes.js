import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

<<<<<<< HEAD
import Dashboard from './components/Dashboard/Dashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
=======
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Logon from './pages/Logon';
import Register from './pages/Register';

 const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={Home} />
                <Route  path="/sobre" component={Sobre} />
                <Route  path="/contato" component={Contato} />
                <Route  path="/logon" component={Logon} />
                <Route  path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );    
>>>>>>> origin/pedro-freitas
}

export default Routes;