import React from 'react';
import { Link } from 'react-router-dom'
import CardsLicitacao from '../../components/CardsLicitacao';
import CardNovaLicitacao from '../../components/CardNovaLicitacao';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListaLicitacoes from './Licitacoes'
import NavBarDark from '../../components/NavBarDark';


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '40px',
        paddingRight: '40px',
        paddingTop: '20px',
        justifyContent: 'center',
    },
    LicitacaoAberta: {
        textDecoration: 'none',
    }
})

const Dashboard = () => {
    
    const classes = useStyles();
    const PegarLicitacoes = ListaLicitacoes => {
        return (
            <Grid item xs={12} sm={6} md={4}>
                <Link className={classes.LicitacaoAberta} to="/LicitacaoAberta">
                <CardsLicitacao {...ListaLicitacoes} />
                </Link>
            </ Grid >
        )
    };

return (
    <>
    <div className="color-background dashboard-bg" />

    <NavBarDark />
    <div className="main_container">
        <section className='card-container-dash'>

    <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={4}>
            <CardNovaLicitacao />
        </ Grid>
        {ListaLicitacoes.map(FazerListas => PegarLicitacoes(FazerListas))}
    </Grid>
    </section>
      </div>
    </>
)
}

export default Dashboard;