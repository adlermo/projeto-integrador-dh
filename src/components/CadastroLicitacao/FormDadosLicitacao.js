import React, { Component } from 'react'
import FormDadosProdutos from './FormDadosProdutos'
import Confirmacao from './Confirmacao'
import Sucesso from './Sucesso'

export class FormDadosLicitacao extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStepStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.targe.value
        })
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio }

        switch (step) {
            case 1:
                return (
                    <FormDadosProdutos
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <h1>Confirmação</h1>
            case 4:
                return <h1>Sucesso</h1>
        }
    }
}

export default FormDadosLicitacao
