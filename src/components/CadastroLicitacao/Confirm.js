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
                <ListItemText primary="First Name" secondary={nomeRes} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={dataLimite} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={quantidadeProdutos} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={produto1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={produto2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={produto3} />
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
