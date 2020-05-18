import React from 'react';
import { Link } from 'react-router-dom'
import LicitacaoAberta from '../../components/LicitacaoAberta/CardsFornecedores.js';
import CardLicitacaoAberta from '../../components/LicitacaoAberta/CardDadosLicitacao.js';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListaDeLicitacoes from './FornecedoresQueAtenderam.js'
import DadosLicitacao from './DadosLicitacao.js'
import NavBarDark from '../../components/NavBarDark';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import GavelIcon from '@material-ui/icons/Gavel';

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
        display: 'flex',
        flexFlow: 'row nowrap',
    },
    LicitacaoAberta: {
        textDecoration: 'none',
    },
    gridInfo: {
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        paddingLeft: '40px',
        paddingRight: '100px',
        paddingTop: '20px',
        paddingBottom: '20px',
        justifyContent: 'left',
        borderRadius: 3,
    },
    button: {
        backgroundColor: 'white',
        '&:hover': {
            background: '#98dfea',
          }
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
        <Grid container spacing={4} className={classes.gridInfo}>
        <Link>
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<GavelIcon style={{ color: '#40476d' }} />}
        style={{ color: '#40476d' }}
      >
        Contrato
      </Button>
      </Link>
      </Grid>
        </section>
      </div>
    </>
    )
}

export default LicitacaoEmAberto;