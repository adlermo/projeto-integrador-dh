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
    <CardDeck>

        <Card>
            <Card-Titular>
                <Card.Img className="top" src={box} alt="Imagem Box" />
                <Card.Title>Licitação A</Card.Title>
            </Card-Titular>
        <Card-Mother className="Card-Mother">
            <Card.Body>
                <Card.Text>2 Macbooks</Card.Text>
                <Card.Text>3 Impressoras</Card.Text>
                <Card.Text>4 Celulares</Card.Text>
            </Card.Body>
        </Card-Mother>
        </ Card>

        <Card>
            <Card-Header>
                <Card.Img className="top" src={box} alt="Imagem Box" />
                <Card.Title>Fornecedor X</Card.Title>
            </Card-Header>
            <Card.Body>
                <Card.Text>Item 1 - R$ 2.000,00</Card.Text>
                <Card.Text>Item 2 - R$ 2.000,00</Card.Text>
                <Card.Text>Item 3 - R$ 2.000,00</Card.Text>
            </Card.Body>
            <Card.Footer>
                <IoIosArrowDown className="arrowDown" />
            </Card.Footer>
        </Card>

        <Card>
            <Card-Header>
                <Card.Img className="top" src={box} alt="Imagem Box" />
                <Card.Title>Fornecedor Y</Card.Title>
            </Card-Header>
            <Card.Body>
                <Card.Text>Item 1 - R$ 2.000,00</Card.Text>
                <Card.Text>Item 2 - R$ 2.000,00</Card.Text>
                <Card.Text>Item 3 - R$ 2.000,00</Card.Text>
            </Card.Body>
            <Card.Footer>
                <IoIosArrowDown className="arrowDown" />
            </Card.Footer>
        </Card>

        <Card>
            <Card-Header>
                <Card.Img className="top" src={box} alt="Imagem Box" />
                <Card.Title>Fornecedor Z</Card.Title>
            </Card-Header>
            <Card.Body>
                <Card.Text>Item 1 - R$ 2.000,00</Card.Text>
                <Card.Text>Item 2 - R$ 2.000,00</Card.Text>
                <Card.Text>Item 3 - R$ 2.000,00</Card.Text>
            </Card.Body>
            <Card.Footer>
                <IoIosArrowDown className="arrowDown" />
            </Card.Footer>
        </Card>
    </CardDeck >
)
// }
// }

export default Licitacoes