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
                            <p>Realizar uma boa Gestão Orçamentária é um processo essencial para o sucesso e estabilidade de qualquer empresa no mercado. Orca é um sistema web que organiza e automatiza suas cotações, podendo ser acessado por qualquer dispositivo conectado à internet.</p>
                        </div>

                        <div className="sobre-item azul">
                            <h2>Missão</h2>
                            <p>Realiza suas cotações com agilidade e segurança, permitindo que você economize dinheiro sempre!.</p>
                            <img src={servicesSite} alt="home-site" />
                        </div>

                        <div className="sobre-item azul">
                            <h2>Visão</h2>
                            <p>Ser a melhor empresa de cotação do Brasil!</p>
                            <img src={servicesSite} alt="home-site" />
                        </div>

                        <div className="sobre-item azul">
                            <h2>Valores</h2>
                            <p>1. Integridade e honestidade, 2. Empenho para com os clientes, parceiros e tecnologia, 3. Dedicação para com a qualidade e melhoramento continuo da plataforma, 4. Assumir plena responsabilidade dos compromissos, resultados e da qualidade perante os clientes, acionistas, parceiros e colaboradores.</p>
                            <img src={servicesSite} alt="home-site" />
                        </div>
                    </div>
                </section>           
            </div>           
        </>
    );
}