import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import './style.css'
import perfil from "../../assets/img/perfil.jpg"

export const Navigationbar = () => (
    <Navbar expand="lg">
      <Navbar.Brand className="Navbar-Brand" href="/">Solicitações</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Pesquisar" className="textSearch" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <img href="/perfil" className="perfil" src={perfil} alt="perfil" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)