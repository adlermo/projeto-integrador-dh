import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import NavBar from '../../components/NavBar';

import api from "../../services/api";
import './styles.css';

export default function Logon() {
    // const [email, setEmail] = useState('');
    // const [senha, setSenha] = useState('');

    // const history = useHistory();

    // async function handleLogin(e) {
    //     e.preventDefault();

    //     try{
    //         const response = await api.post('sessions', { id });

    //         localStorage.setItem('ongId', id);
    //         localStorage.setItem('ongName', response.data.name);

    //         history.push('/profile');
    //     } catch (err){
    //         alert('Falha no Login, tente novamente');
    //     }
    // } form - onSubmit={handleLogin}

    return (
        <>

            <div className="img-background img--logon">
                {/* <img src={imgRegister} alt="" /> */}
            </div>

            <NavBar />

            <div className="main_container">
                <section className="contato-bg" id="contato">
                    <div className="contato">
                        <div className="contato-info">
                            <h1>Login</h1>
                            <p>Entre com seu e-mail e senha e seja feliz!</p>
                            <Link className="back-link" to="/register">
                                <FiArrowLeft size={16} color="#07beb8" />
                                Não tenho Login!?
                            </Link>
                        </div>

                        <div className="contato-form">
                            <form>


                                <input
                                    type="email"
                                    placeholder="Digite seu melhor e-mail"
                                />

                                <input
                                    type="password"
                                    placeholder="Digite sua senha"
                                />

                                <Link className='back-link' to='/dashboard/' >
                                    <button className="button" type="submit">Enviar</button>
                                </Link>

                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}