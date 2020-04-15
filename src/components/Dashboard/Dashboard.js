import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigationbar } from '../Navigationbar/Navigationbar.js';
import Sidebar from '../Sidebar/Sidebar'

import './style.css'

import Licitacoes from '../Licitacoes/Licitacoes'

export default function dashboard() {
  return (
    <div>
      <React.Fragment>
        <Router>
        <Navigationbar />
        <Sidebar />
        </Router>
      </React.Fragment>
     <Licitacoes />;
    </div>
  )
}