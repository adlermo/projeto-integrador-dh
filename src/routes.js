import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

import Dashboard from './pages/Dashboard';
import LicitacaoAberta from './pages/LicitacaoAberta';
import Overview from './pages/Overview';
import Orcamentos from './pages/Orcamentos';
// import Perfil from './pages/Perfil';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/contato" component={Contato} />
                <Route path="/logon" component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/editprofile" component={EditProfile} />
                <Route path="/profile" component={Profile} />

                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/dashboard/licitacaoaberta" component={LicitacaoAberta} />
                <Route path="/dashboard/overview" component={Overview} />
                <Route path="/dashboard/orcamentos" component={Orcamentos} />
                {/* <Route  path="/dashboard/perfil" component={Perfil} /> */}
            </Switch>
        </BrowserRouter >
    );
}

export default Routes;