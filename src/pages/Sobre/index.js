import React from 'react';
import NavBar from '../../components/NavBar';

import './styles.css';

import servicesSite from '../../assets/img/services.svg';

export default function Sobre() {

    return (
        <>
            <NavBar pagina={"sobre"} />  

            <div className="img-background img--sobre">   
            
            </div>

            <div className="main_container">
                <section className="sobre-bg" id="sobre">
                    <div className="sobre">

                         <div className="sobre-info">
                            <h1>Home</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores sit quis voluptatibus aut dolorem ea nemo! Doloremque itaque numquam.</p>
                        </div>

                        <div className="sobre-item azul">
                            <h2>Missão</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, molestiae voluptatibus sed nostrum dignissimos.</p>
                            <img src={servicesSite} alt="home-site" />
                        </div>

                        <div className="sobre-item azul">
                            <h2>Visão</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, molestiae voluptatibus sed nostrum dignissimos.</p>
                            <img src={servicesSite} alt="home-site" />
                        </div>

                        <div className="sobre-item azul">
                            <h2>Valores</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, molestiae voluptatibus sed nostrum dignissimos.</p>
                            <img src={servicesSite} alt="home-site" />
                        </div>
                    </div>
                </section>           
            </div>           
        </>
    );
}