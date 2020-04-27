import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import NavBar from '../../components/NavBar';

// import api from '../../services/api';
import './styles.css';

export default function Contato() {

    return <>
        <NavBar pagina={"contato"} />

        <div className="img-background img--contato">

        </div>

        <div className="main_container">
            <section className="contato-bg" id="contato">
                <div className="contato">
                    <div className="contato-info">
                        <h1>Contato</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quibusdam quae voluptates pariatur odio iste, officia, dicta amet ab eligendi.</p>
                        <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#07beb8" />
                                Home
                            </Link>
                    </div>

                    <div className="contato-form">
                        <form>
                            <input
                                placeholder="Nome"
                            // value="name"
                            // onChange={e => setName(e.target.value)}
                            />

                            <input
                                type="email"
                                placeholder="E-mail"
                            />

                            <textarea
                                cols="15" rows="3"
                                placeholder="Deixe sua mensagem"
                            ></textarea>

                            <button className="button" type="submit">Enviar</button>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    </>
}