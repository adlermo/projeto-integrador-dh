import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

// import React, { Component } from 'react'
import React from 'react'

import box from "../../assets/imgbox.png";

import { IoIosArrowDown } from "react-icons/io";

import './style.css'

// export default class Licitacoes extends Component() {
// render() {
const Licitacoes = () => (

        <Card>
            <Card-Header>
                <Card.Img className="top" src={box} alt="Imagem Box" />
                <Card.Title>Licitação Aberta</Card.Title>
            </Card-Header>
            <Card.Body>
                <Card.Text>Total de itens: 3 </Card.Text>
                <Card.Text>Fornecedores Disponíveis: 10</Card.Text>
                <Card.Text>Atendido: 3</Card.Text>
            </Card.Body>
        </Card>

)
// }
// }

export default Licitacoes