import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FiArrowLeft } from 'react-icons/fi';

// import api from '../../services/api';
import './styles.css';

// import heroesLogo from '../../assets/logo.svg';

export default function Register(){

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
    //         email, 
    //         whatsapp, 
    //         city, 
    //         uf,
    //     };

    //     try {
    //         const response = await api.post('ongs', data);   

    //         alert(`Seu ID de acesso: ${response.data.id}`);
    //         history.push('/');
    //     } catch (err){
    //         alert(`Erro no Cadastro, tente novamente.`);
    //     }
    // } form - onSubmit={handleRegister}

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    {/* <img src={heroesLogo} alt="Be The Hero"/> */}
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        {/* <FiArrowLeft size={16} color="#e02041"/> */}
                        Voltar
                    </Link>
                </section>

                <form>
                    <input 
                        placeholder="Nome Completo"
                        // value="name"
                        // onChange={e => setName(e.target.value)}
                    />

                    <input 
                         
                        placeholder="Digite seu melhor e-mail"
                        // value="email"
                        // onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="CNPJ/CPF"
                        // value="whatsapp"
                        // onChange={e => setwhatsapp(e.target.value)}
                    />

                    <input 
                        placeholder="Celular"
                        // value="whatsapp"
                        // onChange={e => setwhatsapp(e.target.value)}
                    />

                    {/* <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value="city"
                            // onChange={e => setCity(e.target.value)}
                        />

                        <input 
                            placeholder="UF" style={{ width: 80}}
                            value="uf"
                            // onChange={e => setUf(e.target.value)}
                        />
                    </div> */}

                    <button className="button" type="submit">Cadastrar</button>

                </form>                
            </div>
        </div>
    );
}