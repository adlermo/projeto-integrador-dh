import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logoOrca from '../../assets/img/logo.svg';
import homeSite from '../../assets/img/home.svg';
import servicesSite from '../../assets/img/services.svg';
// import heroesImg from '../../assets/heroes.png';

export default function Logon() {

    return (
        <>
            {/* HEADER */}

            <input type="checkbox" id="check" />

            <div class="barra">
                <nav>
                    <a href="#"><div>HOME</div></a>
                    <a href="#"><div>SOBRE</div></a>
                    <a href="#"><div>CONTATO</div></a>
                </nav>
            </div>

            <header className="menu-bg">
                <div className="menu">
                    <div className="menu-logo" >
                        <label class="icone" for="check"> <FiMenu size={24} /> </label>
                    </div>

                    <div className="menu-logo">
                        <img src={logoOrca} alt="home-site" />
                    </div>

                    <nav className="menu-nav">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#comprar">Serviços</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="home-bg" id="home">
                <div className="home">
                    <div className="home-info">
                        <h1>Home</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores sit quis voluptatibus aut dolorem ea nemo! Doloremque itaque numquam, vel porro unde dolor? Aut aspernatur accusantium dolor eveniet tenetur!</p>
                    </div>

                    <div className="home-img">
                        <img src={homeSite} alt="home-site" />
                    </div>
                </div>
            </section>

            <section className="sobre-bg" id="sobre">
                <div className="sobre">
                    <div className="sobre-img">
                        <img src={servicesSite} alt="sobre-site" />
                    </div>
                    <div className="sobre-info">
                        <h1>Sobre</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores sit quis voluptatibus aut dolorem ea nemo! Doloremque itaque numquam, vel porro unde dolor? Aut aspernatur accusantium dolor eveniet tenetur!</p>
                    </div>
                </div>
            </section>

            <section className="newsletter-bg">
                <div className="newsletter">
                    <div className="newsletter-info">
                        <h1>Newsletter</h1>
                        <p>Assine e fique por dentro das novidades.</p>
                    </div>
                    <form className="newsletter-form">
                        <input type="text" placeholder="Seu melhor e-mail" />
                        <button type="submit">Assinar</button>
                    </form>
                </div>
            </section>

            <section className="produtos-bg" id="produtos">
                <div className="produtos-container">
                    <div className="produtos-item azul">
                        <h2>Azul</h2>
                        <img src={homeSite} alt="home-site" />
                    </div>

                    <div className="produtos-item azul">
                        <h2>Azul</h2>
                        <img src={homeSite} alt="home-site" />
                    </div>

                    <div className="produtos-item azul">
                        <h2>Azul</h2>
                        <img src={homeSite} alt="home-site" />
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>Equipe - Orca | Projeto Integrador</p>
            </footer>

        </>
    );
}