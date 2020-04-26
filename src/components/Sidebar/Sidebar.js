import React, { Component, useState } from 'react';
import { FiArchive, FiCoffee, FiGithub, FiLayout, FiGrid } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import orcaLogo from '../../assets/img/logo-site.png';

import './styles.css';

export default function Sidebar() {

    const [expandir, setExpandir] = useState("fechado");
    function menuAtivo() {
        setExpandir(expandir === "fechado" ? "" : "fechado");
    }

    return (

        <div className={`wrapper ${expandir}`}>
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
                    <div>
                        <img className="logo" src={ orcaLogo } alt="Logo Orca"/>
                    </div>

                    <ul>
                        <li>
                            <Link to="/logon">
                                <FiCoffee/> 
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <FiArchive />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                            <FiGrid />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="#">
                            <span className="icon"><FiArchive /> </span>
                            <span className="title">Texto</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <span className="icon"><FiGithub/></span>
                            <span className="title">Texto</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <span className="icon"><FiLayout /></span>
                            <span className="title">Texto</span>
                        </Link>
                    </li>                

                </ul>
            </ div>
        </div>
    )
}