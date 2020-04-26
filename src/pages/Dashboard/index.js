import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from '../../components/NavBar/index.js';

import './style.css'

import Licitacoes from '../Licitacoes/Licitacoes'

export default function Dashboard() {
  return (
    <div>
      <>
        <Router>
        <NavBar />
        <div className="main_container">
        <Licitacoes />;
        </div>
        </Router>
      </>
    </div>
  )
}