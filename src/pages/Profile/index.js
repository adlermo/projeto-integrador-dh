import React from 'react';
import { Link } from 'react-router-dom'
import CardsLicitacao from '../../components/CardsLicitacao';
import CardPerfil from '../../components/CardPerfil';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Perfis from './Perfis'
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

const Profile = () => {
    
    const classes = useStyles();
    const PegarLicitacoes = Perfis => {
        return (
            <Grid item xs={12} sm={6} md={4}>
                <CardPerfil {...Perfis} />
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

        {Perfis.map(FazerListas => PegarLicitacoes(FazerListas))}

    </Grid>
    </section>
      </div>
    </>
)
}

export default Profile;