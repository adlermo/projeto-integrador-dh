import React, { Component, useState } from 'react';
import { FiArchive, FiCoffee, FiGithub, FiLayout, FiGrid } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import orcaLogo from '../../assets/img/logo-site.png';
import profile from '../../assets/img/perfil.jpg';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { IoIosAlbums, IoIosDocument,IoIosArchive } from 'react-icons/io';

import './styles.css';

export default function NavBar() {

    const [expandir, setExpandir] = useState("fechado");
    function menuAtivo() {
        setExpandir(expandir === "fechado" ? "" : "fechado");
    }

    return (
        <div className={`wrapper ${expandir}`}>
            <div className="top_navbar">
                <div className="hamburger" onClick={menuAtivo} >
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <div className="top_menu">
                    <div>
                        <div className="page">Solicitações</div>
                    </div>
                    <Form style={{ width: '60%' }}>
                        <FormControl type="text" placeholder="Pesquisar" className="textSearch" />
                    </Form>

                    <ul>
                        <li>
                            <Link to="/logon">
                                <img className="profile" src={profile} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="#">
                            <span className="icon"><IoIosAlbums /> </span>
                            <span className="title">Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <span className="icon"><IoIosDocument /></span>
                            <span className="title">Contratos</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <span className="icon"><IoIosArchive /></span>
                            <span className="title">Finalizados</span>
                        </Link>
                    </li>

                </ul>
            </div>

        </div>

    )
}