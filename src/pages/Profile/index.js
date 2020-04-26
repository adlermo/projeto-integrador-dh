import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from '../../components/NavBar/index.js';
import Card from 'react-bootstrap/Card'
import './style.css'
import image from '../../assets/img/perfil.jpg';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { IoMdWarning } from "react-icons/io";
import { Link } from 'react-router-dom';



export default function profile() {
  return (
    <div>
      <React.Fragment>
        <Router>
        <NavBar />

        <Card className="cardWarning">
    <Card-Titular>
        <Card.Title>Avisos</Card.Title>
    </Card-Titular>
    <Card-Mother className="card">
    <Card.Body>
        <Card.Text><IoMdWarning />Verificar contrato Licitação Y</Card.Text>
        <Card.Text><IoMdWarning />Informações solicitadas</Card.Text>
        <Card.Text><IoMdWarning />Itens a serem entregues</Card.Text>
    </Card.Body>
    </Card-Mother>
    </ Card>

        <Card className="cardProfile"> <Link to="/editprofile">
    <Card-Titular>
        <Card.Title>Responsável</Card.Title>
    </Card-Titular>
    <Card-Mother className="card">
    <Card.Body>
        <Card.Img className="profileImage" src={image} alt="Profile Image" />
        <Card.Text>Ligia Albuquerque</Card.Text>
        <Card.Text>Coordenadora</Card.Text>
        <Card.Text>Varejista</Card.Text>
    </Card.Body>
    </Card-Mother>
    </Link>
    </ Card>



        </Router>
      </React.Fragment>
    </div>
  )
}