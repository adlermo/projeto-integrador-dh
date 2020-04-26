import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Logon from './pages/Logon';
import Register from './pages/Register';

import Dashboard from './pages/Dashboard';
//import Licitacoes from './pages/Licitacoes';
// import Perfil from './pages/Perfil';

 const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={Home} />
                <Route  path="/sobre" component={Sobre} />
                <Route  path="/contato" component={Contato} />
                <Route  path="/logon" component={Logon} />
                <Route  path="/register" component={Register} />

                <Route  path="/dashboard" exact component={Dashboard} />
                {/*<Route  path="/dashboard/licitacoes" component={Licitacoes} />*/}
                {/* <Route  path="/dashboard/perfil" component={Perfil} /> */}

            </Switch>
        </BrowserRouter>
    );    
}

export default Routes;