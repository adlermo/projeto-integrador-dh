import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarDark from '../../components/NavBarDark/index.js';

import Licitacoes from '../../components/Licitacoes'

export default function Dashboard() {
    return (
        <>
            <div className="color-background dashboard-bg"/>             

            <NavBarDark />

            <div className="main_container">
               <Licitacoes />
            </div>

        </>
  )
}