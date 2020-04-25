import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import orcaLogo from '../../assets/img/logo-site.png';

export default function TopNavBar() {

    const [expandir, setExpandir] = useState("fechado");
    function menuAtivo() {
        setExpandir(expandir === "fechado" ? "" : "fechado");
    }

    return (
        <div className="top_navbar">
            <div
                className="hamburger"
                onClick={menuAtivo}
            >
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </div>
            <div className="top_menu">
                <div className="logo">
                    <img src={orcaLogo} alt="home-site" />
                </div>
                <ul>
                    <li> <Link to="/" className="ativo"> Home </Link> </li>

                    <li> <Link to="/sobre"> Sobre </Link> </li>

                    <li> <Link to="/contato"> Contato </Link> </li>

                </ul>
            </div>
        </div>
    )
}