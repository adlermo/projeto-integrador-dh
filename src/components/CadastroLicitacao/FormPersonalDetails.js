import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
            <AppBar title="Produtos" />
            <TextField
              placeholder="Produto 1"
              label="Produto 1"
              onChange={handleChange('produto1')}
              defaultValue={values.produto1}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <br />
            <TextField
              placeholder="Descrição do Produto"
              label="Produto 2"
              onChange={handleChange('produto2')}
              defaultValue={values.produto2}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <br />
            <TextField
              placeholder="Descrição do Produto"
              label="Produto 3"
              onChange={handleChange('produto3')}
              defaultValue={values.produto3}
              margin="normal"
              fullWidth
              variant="outlined"
            />
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
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
