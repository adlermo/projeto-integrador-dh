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
            <Card-Header>
                <Card.Img className="top" src={box} alt="Imagem Box" />
                <Card.Title>Card title</Card.Title>
            </Card-Header>
            <Card.Body>
                <Card.Text>Testing o que eu quiser! supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
            </Card.Body>
            <Card.Footer>
                <IoIosArrowDown className="arrowDown" />
            </Card.Footer>
        </Card>

        <Card>
            <Card-Header>
                <Card.Img className="top" src={box} alt="Imagem Box" />
                <Card.Title>Card title</Card.Title>
            </Card-Header>
            <Card.Body>
                <Card.Text>This card has supporting text below as a natural lead-in to additional content.{' '}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <IoIosArrowDown className="arrowDown" />
            </Card.Footer>
        </Card>

        <Card>
            <Card-Header>
                <Card.Img className="top" src={box} alt="Imagem Box" />
                <Card.Title>Card title</Card.Title>
            </Card-Header>
            <Card.Body>
                <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
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