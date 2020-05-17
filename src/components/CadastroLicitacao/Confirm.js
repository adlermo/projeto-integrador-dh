import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { nomeRes, dataLimite, quantidadeProdutos, produto1, produto2, produto3 }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Nome do Responsável" secondary={nomeRes} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Data Limite da Licitação" secondary={dataLimite} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Quantidade " secondary={quantidadeProdutos} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Produto 1" secondary={produto1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Produto 2" secondary={produto2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Produto 3" secondary={produto3} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
