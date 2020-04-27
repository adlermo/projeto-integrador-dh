import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarDark from '../../components/NavBarDark/index.js';

import './styles.css'

import Licitacoes from '../../components/Licitacoes'

export default function Dashboard() {
<<<<<<< HEAD
  return (
    <>
      <div className="color-background dashboard-bg"/>             
        <NavBarDark />
          <div className="main_container">
            <h1> teste </h1>
          </div>
=======
    return (
        <>
            <div className="color-background dashboard-bg"/>             

            <NavBarDark />

            <div className="main_container">
               <Licitacoes />
            </div>

>>>>>>> 2f371d28894a487dfb0499e0ad2e714902aba39a
        </>
  )
}