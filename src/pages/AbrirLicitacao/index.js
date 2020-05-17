import React from 'react';
import NavBarDark from '../../components/NavBarDark';
import { UserForm } from '../../components/CadastroLicitacao/UserForm';
import './index.css';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const AbrirLicitacao = () => {

    return (
        <>
            <div className="color-background dashboard-bg" />

            <NavBarDark />
            <div className="main_container">
                <section className='card-container-dash'>
                    <UserForm />
                </section>
            </div>
        </>
    )
}


export default AbrirLicitacao;