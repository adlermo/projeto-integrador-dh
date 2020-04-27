import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import NavBar from '../../components/NavBar';

// import api from '../../services/api';
import './styles.css';

export default function Register() {

    // const [ name, setName] = useState('');
    // const [ email, setEmail] = useState('');
    // const [ whatsapp, setwhatsapp] = useState('');
    // const [ city, setCity] = useState('');
    // const [ uf, setUf] = useState('');

    // const history = useHistory();

    // async function handleRegister(e){
    //     e.preventDefault();

    //     const data = {
    //         name, 
    //         email, //        
    //     };

    //     try {
    //         const response = await api.post('tabela', data);   

    //         alert(`Seu ID de acesso: ${response.data.id}`);
    //         history.push('/');
    //     } catch (err){
    //         alert(`Erro no Cadastro, tente novamente.`);
    //     }
    // } form - onSubmit={handleRegister}

    return (
        <>

            <div className="img-background img--register">                  
                {/* <img src={imgRegister} alt="" /> */}
            </div>

            <NavBar />

            <div className="main_container">
                <section className="contato-bg" id="contato">
                    <div className="contato">
                        <div className="contato-info">
                            <h1>Cadastro</h1>
                            <p>Faça seu cadastro, entre na plataforma e envie ou receba orçamentos...</p>
                            <Link className="back-link" to="/logon">
                                <FiArrowLeft size={16} color="#07beb8" />
                                Já tenho Login!
                            </Link>
                        </div>

                        <div className="contato-form">
                            <form>
                                <input
                                    placeholder="Nome Completo"
                                     // value="name"
                                    // onChange={e => setName(e.target.value)}
                                />

                                <input
                                    placeholder="Celular"
                                />

                                <input
                                    placeholder="CNPJ/CPF"
                                />

                                <input
                                    type="email"
                                    placeholder="Digite seu melhor e-mail"
                                />
                                
                                <input
                                    type="password"
                                    placeholder="Digite uma senha"
                                />                             

                                <button className="button" type="submit">Enviar</button>

                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}