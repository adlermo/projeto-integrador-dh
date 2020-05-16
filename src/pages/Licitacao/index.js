import React from 'react';
import { Link } from 'react-router-dom'
import LicitacaoAberta from '../../components/LicitacaoAberta/CardsFornecedores.js';
import CardLicitacaoAberta from '../../components/LicitacaoAberta/CardDadosLicitacao.js';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListaDeLicitacoes from './FornecedoresQueAtenderam.js'
import DadosLicitacao from './DadosLicitacao.js'
import NavBarDark from '../../components/NavBarDark';

const useStyles = makeStyles({
    gridContainer: {
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        paddingLeft: '40px',
        paddingRight: '100px',
        paddingTop: '20px',
        paddingBottom: '20px',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 3,

    },
    LicitacaoAberta: {
        textDecoration: 'none',
    }
})

const LicitacaoEmAberto = () => {
    const classes = useStyles();
    const PegarLicitacoes = ListaDeLicitacoes => {
        return (
            <Grid item xs={12} sm={6} md={4}>
                <LicitacaoAberta {...ListaDeLicitacoes} />
            </ Grid>
        )
    };
    const Dados = DadosLicitacao => {
        return (
            <Grid item xs={12} sm={6} md={4}>
                <CardLicitacaoAberta {...DadosLicitacao} />
            </ Grid>
        )
    };

    return (
    <>
    <div className="color-background dashboard-bg" />

    <NavBarDark />
    <div className="main_container">
        <section className='card-container-dash'>
        <Grid container spacing={4} className={classes.gridContainer}>

            {DadosLicitacao.map(PegarDados => Dados(PegarDados))}

            {ListaDeLicitacoes.map(FazerListas => PegarLicitacoes(FazerListas))}
            
        </Grid>
        </section>
      </div>
    </>
    )
}

export default LicitacaoEmAberto;