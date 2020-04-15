import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigationbar } from '../Navigationbar/Navigationbar.js';

import './style.css'

import Licitacoes from '../Licitacoes/Licitacoes'

export default function dashboard() {
  return (
    <div>
      <React.Fragment>
        <Router>
        <Navigationbar />
        </Router>
      </React.Fragment>
     <Licitacoes />;
    </div>
  )
}