import React from 'react';
import NavBar from '../../components/NavBar';

import './styles.css';

import homeSite from '../../assets/img/home.svg';

export default function home() {

    return (
        <>
            <div className="img-background img--home" />   
            
            <NavBar pagina={"home"} />

            <div className="main_container">
                <section className="home-bg">
                    <div className="home">
                        <div className="home-info">
                            <h1>Home</h1>
                            <p>Realizar uma boa Gestão Orçamentária é um processo essencial para o sucesso e estabilidade de qualquer empresa no mercado. Orca é um sistema web que organiza e automatiza suas cotações, podendo ser acessado por qualquer dispositivo conectado à internet.</p>
                            
                        </div>

                        <div className="home-img">
                            <img src={homeSite} alt="home-site" />
                        </div>

                    </div>
                </section>
            </div>

        </>
    );
}