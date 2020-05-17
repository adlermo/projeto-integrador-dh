import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));




export class CadastroLicitacao extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();

  };
  

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
            <TextField 
              placeholder="Nome do Responsável"
              label="Responsável"
              onChange={handleChange('nomeRes')}
              defaultValue={values.nomeRes}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <br />
            <TextField
              placeholder="Data Limite da Licitação"
              label="Data Limite"
              onChange={handleChange('dataLimite')}
              defaultValue={values.dataLimite}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <br />
            <TextField
              placeholder="Quantidade de Produtos"
              label="Produtos"
              onChange={handleChange('quantidadeProdutos')}
              defaultValue={values.quantidadeProdutos}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default CadastroLicitacao;
