import React, { Component } from 'react';

import './styles.css'

import Register from '../../pages/Register'
import Licitacoes from '../../pages/Licitacoes';
import Overview from '../../pages/Overview';

export default class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: <div className='item'>Oops, an error ocurred!</div>,
            register: <Register />,
            licitacoes: <Licitacoes />,
            overview: <Overview />,
        }
    }

    select = () => {
        switch (this.props.name) {
            case "Licitacoes":
                return this.state.licitacoes;
            case "Register":
                return this.state.register;
            case "Overview":
                return this.state.overview;
            default:
                return this.state.text;
        }
    }

    render() {
        return <>
            {this.select()}
        </>
    }
}