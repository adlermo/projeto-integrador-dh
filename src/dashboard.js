import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import box from './assets/imgbox.png';
import { IoIosArrowDown } from "react-icons/io";
import perfil  from "./assets/perfil.jpg"
import './style.css'

export default function dashboard() {
    return (
      <div>
<Container fluid>
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>
<img className="perfil" src={ perfil } alt="perfil" />
<div class="row">
  <div class="col-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Dashboard</a>
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Análises</a>
      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Contratos Fechados</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Reviews</a>
    </div>
  </div>
</div>

<CardDeck>
<Card>
  <Card.Img className="top" src={ box } alt="Imagem Box" />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      Testing o que eu quiser! supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  <IoIosArrowDown />
  </Card.Footer>
</Card>
<Card>
  <Card.Img className="top" src={ box } alt="Imagem Box"  />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This card has supporting text below as a natural lead-in to additional
      content.{' '}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
<Card>
  <Card.Img className="top" src={ box } alt="Imagem Box"  />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This card has even longer content than the first to
      show that equal height action.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
</CardDeck>
</div>
)}