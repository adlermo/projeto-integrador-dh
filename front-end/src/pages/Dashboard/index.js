import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarDark from '../../components/NavBarDark/index.js';

import './styles.css'

import Licitacoes from '../Licitacoes'

export default function Dashboard() {
    return (
        <>
            <div className="color-background dashboard-bg"/>             

            <NavBarDark />

            <div className="main_container">
               <h1> teste </h1>
            </div>

        </>
    )
}