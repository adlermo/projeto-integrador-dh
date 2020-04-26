import React, { Component } from 'react';

import './styles.css'

import Register from '../Register'
import Orcamentos from '../Orcamentos';
import Overview from '../Overview';
import Donut from '../Donut';

export default class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: <div className='item'>Oops, an error ocurred!</div>,
            register: <Register />,
            orcamentos: <Orcamentos />,
            overview: <Overview />,
            donut: <Donut />,
        }
    }

    select = (page) => {
        switch (page) {
            case "Orcamentos":
                return this.state.orcamentos;
            case "Register":
                return this.state.register;
            case "Overview":
                return this.state.overview;
            case "Donut":
                return this.state.donut;
            default:
                return this.state.text;
        }
    }

    render() {
        return <>
            {this.select(this.props.name)}
        </>
    }
}