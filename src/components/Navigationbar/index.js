import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import './style.css'
import perfil from "../../assets//img/perfil.jpg"

export const Navigationbar = () => (
  import React, { Component, useState } from 'react';
import { IoIosHome, IoIosInformationCircle, IoMdCart, IoMdText, IoIosLogIn } from 'react-icons/io';
import { Link } from 'react-router-dom';
import orcaLogo from '../../assets/img/logo-site.png';
// import profile from '../../assets/img/perfil.jpg';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

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

            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <span className="icon"><IoIosHome /> </span>
                            <span className="title">Home</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/orcamentos">
                            <span className="icon"><IoMdCart /></span>
                            <span className="title">Orçamentos</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/logon">
                            <span className="icon"><IoIosLogIn /></span>
                            <span className="title">Entrar</span>
                        </Link>
                    </li>
                </ul>
            </div>


        </div>
        // <div className={`wrapper ${expandir}`}>
        //     <div className="top_navbar">
        //         <div
        //             className="hamburger"
        //             onClick={menuAtivo}
        //         >
        //             <div className="one"></div>
        //             <div className="two"></div>
        //             <div className="three"></div>
        //         </div>
        //         <div className="top_menu">
        //             <div>
        //                 <div className="page">Solicitações</div>

        //             </div>

        //             <ul>
        //                 <li>
        //                     <Link to="/logon">
        //                         {/* <img className="profile" src={profile} />   */}
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>

        //     <div className="sidebar">
        //         <ul>
        //             <li>
        //                 <Link to="/">
        //                     <span className="icon"><IoIosHome /> </span>
        //                     <span className="title">Home</span>
        //                 </Link>
        //             </li>

        //             <li>
        //                 <Link to="/sobre">
        //                     <span className="icon"><IoIosInformationCircle /></span>
        //                     <span className="title">Sobre</span>
        //                 </Link>
        //             </li>

        //             <li>
        //                 <Link to="/orçamentos">
        //                     <span className="icon"><IoMdCart /></span>
        //                     <span className="title">Orçamentos</span>
        //                 </Link>
        //             </li>

        //             <li>
        //                 <Link to="/contato">
        //                     <span className="icon"><IoMdText /></span>
        //                     <span className="title">Contato</span>
        //                 </Link>
        //             </li>

        //             <li>
        //                 <Link to="/logon">
        //                     <span className="icon"><IoIosLogIn /></span>
        //                     <span className="title">Logar</span>
        //                 </Link>
        //             </li>

        //         </ul>
        //     </div>

        // </div>

    )
}
    <Navbar expand="lg">
      <Navbar.Brand className="Navbar-Brand" href="/">Solicitações</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Pesquisar" className="textSearch" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <img href="/perfil" className="perfil" src={perfil} alt="perfil" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)