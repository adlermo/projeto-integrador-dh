import React, { Component } from 'react';

import './styles.css'

import Register from '../../pages/Register'
import Licitacoes from '../../pages/Licitacoes';

export default class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: <div className='item'>I'm the body</div>,
            register: <Register />,
            licitacoes: <Licitacoes />,
        }
    }

    select = () => {
        switch (this.props.name) {
            case "Licitacoes":
                return this.state.licitacoes;
            case "Register":
                return this.state.register;
            default:
                return this.state.register;
        }
    }

    render() {
        return <>
            {this.select()}
        </>
    }
}