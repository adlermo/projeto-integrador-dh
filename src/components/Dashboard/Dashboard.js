import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'

import perfil from "../../assets/perfil.jpg"
import './style.css'

import Licitacoes from '../Licitacoes/Licitacoes'

export default function dashboard() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <img className="perfil" src={perfil} alt="perfil" />
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
      {/* <Licitacoes /> */}
    </div>
  )
}