import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from '../../components/NavBar/index.js';
import Card from 'react-bootstrap/Card'
import './style.css'
import image from '../../assets/img/perfil.jpg';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { IoMdWarning } from "react-icons/io";



export default function profile() {
  return (
    <div>
      <React.Fragment>
        <Router>
        <NavBar />

        <Card className="cardProfile">
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
    </ Card>
    
        </Router>
      </React.Fragment>
    </div>
  )
}