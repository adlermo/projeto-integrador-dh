import React, { useState } from 'react';
import { IoIosAlbums, IoIosDocument, IoIosArchive } from 'react-icons/io';
import { Link } from 'react-router-dom';
import orcaLogo from '../../assets/img/logo-site.png';
import profile from '../../assets/perfil.jpg';

import './styles.css';

export default function NavBar() {

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
                <div className="top-dark-menu">
                    <div className="logo">
                        <img src={orcaLogo} alt="home-site" />
                    </div>

                    <ul>
                        <li>
                            <Link to="/profile">
                                <img className="profile" src={profile} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/dashboard/overview">
                            <span className="icon"><IoIosAlbums /> </span>
                            <span className="title">Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard/licitacaoaberta">
                            <span className="icon"><IoIosDocument /></span>
                            <span className="title">Contratos</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard/orcamentos">
                            <span className="icon"><IoIosArchive /></span>
                            <span className="title">Finalizados</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}